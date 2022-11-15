import { Box, Button, Image, Text } from '@chakra-ui/react';
import { Encoder, ErrorCorrectionLevel, QRByte } from '@nuintun/qrcode';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../../state/reducers';
import { IbrandState } from '../../../../state/reducers/brandReducer';
import { IcolorsState } from '../../../../state/reducers/colorsReducer';

//interface IQrGenerator {}

function generateQrImageDataString({
    storeColors,
    storeBrandData,
}: {
    storeColors: IcolorsState;
    storeBrandData: IbrandState;
}) {
    const dataPayload = {
        colors: storeColors,
        brandName: storeBrandData.brandName,
    };
    return JSON.stringify(dataPayload);
}

function generateQrImage(dataString: string) {
    const qrcode = new Encoder();

    qrcode.setEncodingHint(true);
    qrcode.setErrorCorrectionLevel(ErrorCorrectionLevel.H);
    qrcode.write(new QRByte(dataString));
    qrcode.make();
    return qrcode.toDataURL();
}

export default function Generator() {
    const storeColors = useSelector((state: State) => state.colors);
    const storeBrandData = useSelector((state: State) => state.brand);
    const [base64URL, setBase64URL] = useState<string | undefined>(undefined);

    const saveDataHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const dataString = generateQrImageDataString({
            storeColors,
            storeBrandData,
        });
        setBase64URL(generateQrImage(dataString));
    };

    //useEffect(() => {}, []);
    return (
        <Box>
            <Text marginBottom={4}>
                Generate a QrCode which will contain all the necessary data to
                restore colors and same informations previously inserted in the
                application
            </Text>
            <Box marginBottom={6} textAlign="center">
                <Button onClick={saveDataHandler}>Generate QrCode</Button>
            </Box>
            <Box height={'400px'} width={'100%'}>
                {base64URL ? (
                    <Image
                        src={base64URL}
                        width={'400px'}
                        height={'400px'}
                        display={'block'}
                        marginX={'auto'}
                        alt="qrcode_backup"
                        title="qrcode_backup"
                    />
                ) : null}
            </Box>
        </Box>
    );
}
