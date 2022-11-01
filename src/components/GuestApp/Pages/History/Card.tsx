import { AspectRatio, Flex, Image, Box, Text } from '@chakra-ui/react';
import { RiMapPinFill as AddressMarker } from 'react-icons/ri';
import Reviews from './Reviews';
interface IHistoryCard {
    primaryAccentColor: string;
    secondaryAccentColor: string;
    price: string;
    days: string;
    roomImage: string;
    roomName: string;
    roomAddr: string;
    reviewScore: string;
    totalReviews: string;
}

export default function Card({
    primaryAccentColor,
    secondaryAccentColor,
    roomImage,
    roomName,
    roomAddr,
    price,
    days,
    reviewScore,
    totalReviews,
}: IHistoryCard) {
    return (
        <Box borderRadius={'10px'} boxShadow="xl" padding={3} marginBottom={5}>
            <AspectRatio maxW="400px" ratio={21 / 9} marginBottom={3}>
                <Image src={roomImage} alt={roomName} objectFit="cover" />
            </AspectRatio>
            <Flex>
                <Box flex={'0 0 70%'}>
                    <Text fontWeight={'bold'}>Primary House</Text>
                    <Flex alignItems={'center'} flexWrap="nowrap" mb={2}>
                        <AddressMarker
                            fontSize={'1.5rem'}
                            color={secondaryAccentColor}
                        />
                        <Box
                            marginRight={1}
                            marginLeft={2}
                            fontStyle={'italic'}
                            fontSize={'0.8rem'}
                        >
                            <Text>{roomAddr}</Text>
                        </Box>
                    </Flex>
                    <Reviews score={reviewScore} reviewsCount={totalReviews} />
                </Box>
                <Box marginLeft="auto" paddingRight={2}>
                    <Text color={primaryAccentColor}>€ {price}</Text>
                    <Text fontSize={'sm'}>Days: {days}</Text>
                </Box>
            </Flex>
        </Box>
    );
}
