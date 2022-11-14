import { Button } from '@chakra-ui/react';
import {
    Encoder,
    QRByte,
    QRKanji,
    ErrorCorrectionLevel,
} from '@nuintun/qrcode';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../../state/reducers';
import { IbrandState } from '../../../../state/reducers/brandReducer';
import { IcolorsState } from '../../../../state/reducers/colorsReducer';

interface IQrGenerator {}

function generateQrImageDataString({
    storeColors,
    storeBrandData,
}: {
    storeColors: IcolorsState;
    storeBrandData: IbrandState;
}) {
    const dataPayload = { colors: storeColors, brand: storeBrandData };
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

export default function Generator({}: IQrGenerator) {
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

    useEffect(() => {}, []);
    return (
        <div>
            <Button onClick={saveDataHandler}>Save</Button>
            {base64URL ? (
                <img src={base64URL} width={'500px'} height={'500px'} />
            ) : null}
        </div>
    );
}
