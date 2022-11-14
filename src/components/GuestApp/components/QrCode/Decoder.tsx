import { Flex, Input, Image, Text } from '@chakra-ui/react';
import { Decoder as QrDecoder } from '@nuintun/qrcode';
import { useState } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

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

    /*
    qrCode
    ?.scan(base64Image)
    ?.then((result) => {
        console.log(result.data);
        handleRestoreSettings(result.data);
    })
    .catch((error) => {
        console.error(error);
    });
    */

    try {
        const result = await qrCode.scan(base64Image);
        if (result.data) {
            console.log(result.data);
            handleRestoreSettings(result.data);
        }
    } catch (error) {
        console.log(error);
    }
}

function handleRestoreSettings(data: string) {}

export default function Decoder(_props: IQrDecoder) {
    const [base64URL, setBase64URL] = useState<string | undefined>(undefined);

    function handleInputChange(e: any) {
        const uploadedImage = e.target.files[0];

        getBase64(uploadedImage).then((base64Image) => {
            if (typeof base64Image === 'string') {
                setBase64URL(base64Image);
                handleImageScan(base64Image);
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
        <div>
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
                <Image src={base64URL} margin="0 auto" objectFit={'contain'} />
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
                        Drag or click on this box
                    </Text>
                </Flex>
            )}
        </div>
    );
}
