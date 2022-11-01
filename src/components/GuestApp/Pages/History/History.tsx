import { Box, Flex, Text, AspectRatio, Image } from '@chakra-ui/react';
import { IcolorsState } from '../../../../state/reducers/colorsReducer.d';
import { RiMapPinFill as AddressMarker } from 'react-icons/ri';

import { IroomState } from '../../../../state/reducers/roomReducer';
import Topbar from '../../components/shared/Topbar';
import Card from './Card';

type Props = {
    brandColors: IcolorsState;
    data: IroomState;
};

const cards = [
    {
        price: '325',
        days: '2',
        roomImage:
            'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        roomName: 'Glorious Room',
        roomAddr: 'Lorem Ipsum 5 Avenue',
        reviewScore: '4',
        totalReviews: '68',
    },
    {
        price: '700',
        days: '7',
        roomImage:
            'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        roomName: 'Relaxing Room',
        roomAddr: 'Lorem Ipsum 89 St.',
        reviewScore: '5',
        totalReviews: '1370',
    },
];

export default function History({ brandColors, data }: Props) {
    const {
        primary: colorPrimary,
        primary_darkmode: colorPrimaryDarkMode,
        secondary: colorSecondary,
        secondary_darkmode: colorSecondaryDarkMode,
        tertiary: colorTertiary,
        quaternary: colorQuaternary,
    } = brandColors;

    const { roomName, roomAddr, roomDesc, roomImage } = data;

    return (
        <Box>
            <Topbar title="History" />
            <Box padding="25px">
                <Card
                    primaryAccentColor={colorPrimary.hex}
                    secondaryAccentColor={colorSecondary.hex}
                    price={'450'}
                    days={'4'}
                    roomImage={roomImage}
                    roomName={roomName}
                    roomAddr={roomAddr}
                    reviewScore={'4.8'}
                    totalReviews={'568'}
                />
                {cards.map((card) => (
                    <Card
                        {...card}
                        primaryAccentColor={colorPrimary.hex}
                        secondaryAccentColor={colorSecondary.hex}
                    />
                ))}
            </Box>
        </Box>
    );
}
