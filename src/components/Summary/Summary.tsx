import { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Box,
    useToast,
} from '@chakra-ui/react';

import { useSelector } from 'react-redux';
import { State } from '../../state/reducers/index';
import { colori } from '../../data/colori';
import { BsClipboardPlus, BsClipboardCheck } from 'react-icons/bs';
import { IcolorsState } from '../../state/reducers/colorsReducer';
import Generator from '../GuestApp/components/QrCode/Generator';

//interface ISummaryProps {}

function Summary() {
    const [isColorCopied, setIsColorCopied] = useState({
        primary: false,
        primary_darkmode: false,
        secondary: false,
        secondary_darkmode: false,
        tertiary: false,
        quaternary: false,
        success: false,
        danger: false,
        bottom_menu_1: false,
        bottom_menu_2: false,
        bottom_menu_3: false,
        bottom_menu_4: false,
    });

    const userCopiedColorAlert = useToast();

    const copyToClipboardHandler = async (color: keyof IcolorsState) => {
        await navigator.clipboard.writeText(
            `${stateColors[color].hex}
      rgb(${stateColors[color].rgb})`,
        );
        setIsColorCopied({
            ...isColorCopied,
            [color]: true,
        });

        const colorAlias = colori.find((colore) => colore.store_key === color);
        userCopiedColorAlert({
            description: `Colore ${colorAlias?.alias} copiato`,
            status: 'success',
            duration: 1150,
            isClosable: true,
        });
    };

    const stateColors = useSelector((state: State) => state.colors);
    return (
        <>
            <Generator />
            <Table variant="simple" size="lg">
                <Thead>
                    <Tr>
                        <Th>Colore</Th>
                        <Th textAlign={'center'}>Hex</Th>
                        <Th textAlign={'center'}>RGB</Th>
                        <Th textAlign={'center'}>Preview</Th>
                        <Th textAlign={'center'}>Copy To Clipboard</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {colori.map(({ store_key, alias }) => {
                        const ClipboardIcon = isColorCopied[store_key]
                            ? BsClipboardCheck
                            : BsClipboardPlus;
                        const clipboardIconColor = isColorCopied[store_key]
                            ? 'green'
                            : 'blue';
                        return (
                            <Tr key={store_key}>
                                <Td>{alias}</Td>
                                <Td textAlign={'center'}>
                                    {stateColors[store_key].hex}
                                </Td>
                                <Td textAlign={'center'}>
                                    {stateColors[store_key].rgb}
                                </Td>
                                <Td textAlign={'center'}>
                                    <Box
                                        w="25px"
                                        h="25px"
                                        background={stateColors[store_key].hex}
                                        margin={'auto'}
                                    />
                                </Td>
                                <Td textAlign={'center'}>
                                    <IconButton
                                        aria-label="Copia colore"
                                        colorScheme={clipboardIconColor}
                                        name={store_key}
                                        onClick={() => {
                                            copyToClipboardHandler(store_key);
                                        }}
                                        icon={<ClipboardIcon />}
                                        transition={'all 0.3s ease-out'}
                                    />
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </>
    );
}

export default Summary;
