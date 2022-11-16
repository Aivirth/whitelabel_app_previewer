import { Flex, Input, Image, Text, Box } from '@chakra-ui/react';
import { Decoder as QrDecoder } from '@nuintun/qrcode';
import { useState } from 'react';
import {
    AiFillCheckSquare as SuccessIcon,
    AiOutlineLoading3Quarters as LoadingIcon,
    AiOutlineQrcode as QrCodeIcon,
} from 'react-icons/ai';
import { BiErrorAlt as ErrorIcon } from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { settingsColorsRestore as settingsColorsRestoreAction } from '../../../../state/action_creators/colorsActionCreator';
import { State } from '../../../../state/reducers';
import {
    IcolorsState,
    ISettingsColorsRestoreAction,
    requiredColorProperties,
} from '../../../../state/reducers/colorsReducer';

interface IQrDecoder {}

const getBase64 = (file: Blob) => {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

async function handleImageScan(base64Image: string) {
    const qrCode = new QrDecoder();
    try {
        const result = await qrCode.scan(base64Image);
        if (result.data) {
            //console.log(result.data);
            return result.data;
        }
    } catch (error) {
        console.log(error);
    }
}

function checkAndParseQrCodePayload(data: string) {
    const parsedSettingsFromQrCode = JSON.parse(data);
    const { colors }: { colors: IcolorsState; brandName: string } =
        parsedSettingsFromQrCode;

    if (!requiredColorProperties.every((color) => color in colors)) {
        //handle restore error
        throw new Error(
            'Required properties not met with match in colors parsed object from QRcode image',
        );
    }
    // Check if colors have hex and rgb key
    for (const colorKeys in colors) {
        if (
            !['hex', 'rgb'].every(
                (colorFormat) =>
                    colorFormat in colors[colorKeys as keyof typeof colors],
            )
        ) {
            //handle restore error
            throw new Error(
                'Required properties hex and rgb not met within color object',
            );
        }
    }

    return parsedSettingsFromQrCode;
}

export default function Decoder(_props: IQrDecoder) {
    const [base64URL, setBase64URL] = useState<string | undefined>(undefined);
    const [restoreStatus, setRestoreStatus] = useState<
        string | 'idle' | 'executing' | 'failed' | 'success'
    >('idle');
    const [errors, setErrors] = useState<[]>([]);
    const dispatch = useDispatch();
    //const storeColors = useSelector((state: State) => state.colors);
    //const storeBrandName = useSelector((state: State) => state.brand.brandName);

    const settingsColorsRestore = bindActionCreators(
        settingsColorsRestoreAction,
        dispatch,
    );

    function loadSettingsFromImage({
        colors,
        brandName,
    }: {
        colors: IcolorsState;
        brandName: string;
    }) {
        setRestoreStatus('pending');
        try {
            settingsColorsRestore(colors);
            setRestoreStatus('success');
        } catch (error) {
            setRestoreStatus('failed');
        }
    }

    function handleInputChange(e: any) {
        const uploadedImage = e.target.files[0];

        getBase64(uploadedImage).then(async (base64Image) => {
            if (typeof base64Image === 'string') {
                setBase64URL(base64Image);
                const qrRawData = await handleImageScan(base64Image);
                if (typeof qrRawData === 'string') {
                    try {
                        const {
                            colors,
                            brandName,
                        }: { colors: IcolorsState; brandName: string } =
                            checkAndParseQrCodePayload(qrRawData);
                        loadSettingsFromImage({ colors, brandName });
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        });
    }

    const isImageUploaded = (): boolean => {
        if (base64URL && base64URL !== 'default') {
            return true;
        }
        return false;
    };

    return (
        <Box>
            <Box
                width={'300px'}
                height="300px"
                position="relative"
                display={'flex'}
                alignItems={'center'}
                justifyContent="center"
                marginX="auto"
                marginBottom={5}
            >
                <Input
                    type="file"
                    name={'qrcode_decode'}
                    onChange={handleInputChange}
                    position="absolute"
                    margin={0}
                    padding={0}
                    width={'100%'}
                    height={'100%'}
                    outline={'none'}
                    opacity={0}
                    top={0}
                    left={0}
                />
                {isImageUploaded() ? (
                    <Image
                        src={base64URL}
                        margin="0 auto"
                        objectFit={'contain'}
                    />
                ) : (
                    <Flex
                        flexDir={'column'}
                        alignItems="center"
                        justifyContent={'center'}
                    >
                        <QrCodeIcon fontSize={'50px'} />
                        <Text
                            textAlign={'center'}
                            alignSelf={'center'}
                            marginTop={3}
                        >
                            Drag or click on this box
                        </Text>
                    </Flex>
                )}
            </Box>
            {restoreStatus === 'pending' ? <Box>loading...</Box> : null}
            {restoreStatus === 'success' ? <Box>success</Box> : null}
            {restoreStatus === 'failed' ? <Box>Failed</Box> : null}
        </Box>
    );
}
