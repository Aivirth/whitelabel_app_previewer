import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Image,
    Input,
    Text,
    Flex,
    Switch,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import { AiOutlineUpload } from 'react-icons/ai';

interface IImageUploadProps {
    inputName: string;
    boxWidth?: string;
    boxHeight?: string;
    caption?: string;
    reduxStateElement?: string | null;
    reduxDispatcher?: Function;
    contrastControl?: boolean;
    onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

interface IContrastToggleProps {
    isChecked: boolean;
    onChange?:
        | ((event: React.ChangeEvent<HTMLInputElement>) => void)
        | undefined;
}

const ContrastToggle = ({
    isChecked = false,
    onChange,
}: IContrastToggleProps) => {
    return (
        <FormControl
            display="flex"
            alignItems="center"
            justifyContent={'center'}
        >
            <FormLabel htmlFor="contrast-randomtodo" mb="0">
                Abilita contrasto ?
            </FormLabel>
            <Switch
                id="contrast-randomtodo"
                size="lg"
                isChecked={isChecked}
                onChange={onChange}
            />
        </FormControl>
    );
};

function ImageUpload(props: IImageUploadProps) {
    const [base64URL, setBase64URL] = useState<string | undefined>(undefined);
    const [contrastDark, setContrastDark] = useState<boolean>(false);

    const getBase64 = (file: Blob) => {
        return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileInputChange = (e: any) => {
        const uploadedImage = e.target.files[0];

        getBase64(uploadedImage).then((base64Image) => {
            if (typeof base64Image === 'string') {
                setBase64URL(base64Image);
                if (props.reduxDispatcher && props.reduxStateElement) {
                    props.reduxDispatcher(base64Image);
                }
            }
        });
    };

    const isImageUploaded = useCallback((): boolean => {
        if (base64URL && base64URL !== 'default') {
            return true;
        }
        return false;
    }, [base64URL]);

    useEffect(() => {
        if (!isImageUploaded()) {
            if (props.reduxDispatcher && props.reduxStateElement) {
                setBase64URL(props.reduxStateElement);
            }
        }

        if (props.contrastControl) {
            const contrastSetting = sessionStorage.getItem(
                `${props.inputName}__contrast`,
            );
            if (contrastSetting && JSON.parse(contrastSetting)) {
                setContrastDark(JSON.parse(contrastSetting));
            }
        }
    }, [
        isImageUploaded,
        props.reduxStateElement,
        props.inputName,
        props.reduxDispatcher,
        props.contrastControl,
    ]);

    const handleContrastCheck = () => {
        setContrastDark(!contrastDark);
        sessionStorage.setItem(
            `${props.inputName}__contrast`,
            JSON.stringify(!contrastDark),
        );
    };

    return (
        <Box>
            <Flex justifyContent={'center'} cursor="pointer">
                <Flex
                    position="relative"
                    borderWidth={'1px'}
                    borderStyle={'solid'}
                    borderColor={'#111111'}
                    transition={'all 0.4s ease'}
                    width={
                        typeof props.boxWidth === 'string'
                            ? props.boxWidth
                            : '200px'
                    }
                    height={
                        typeof props.boxHeight === 'string'
                            ? props.boxHeight
                            : '200px'
                    }
                    padding="10px"
                    //   background={'#999a9a'}
                    //   color={'white'}
                    background={contrastDark ? 'gray.700' : 'white'}
                    color={contrastDark ? 'white' : 'gray.700'}
                    _hover={{
                        borderColor: 'brand.main',
                        color: '#aaabab',
                    }}
                >
                    <Input
                        type="file"
                        name={props.inputName}
                        onChange={
                            props.onChangeHandler
                                ? props.onChangeHandler
                                : handleFileInputChange
                        }
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
                            <AiOutlineUpload fontSize={'50px'} />
                            <Text
                                textAlign={'center'}
                                alignSelf={'center'}
                                marginTop={3}
                            >
                                {props.caption
                                    ? props.caption
                                    : 'Trascina qui il tuo logo o clicca questa area'}
                            </Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            {props.contrastControl && (
                <Box marginTop={'10px'}>
                    <ContrastToggle
                        isChecked={contrastDark}
                        onChange={handleContrastCheck}
                    />
                </Box>
            )}
        </Box>
    );
}

export default ImageUpload;
