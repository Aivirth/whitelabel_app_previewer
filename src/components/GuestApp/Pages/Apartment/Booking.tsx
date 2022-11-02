import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { IcolorsState } from '../../../../state/reducers/colorsReducer';
import Calendar from '../../components/Apartment/Calendar';
import BottomMenu from '../../components/shared/BottomMenu';
import Topbar from '../../components/shared/Topbar';

interface IBooking {
    brandColors: IcolorsState;
}

export default function Booking({ brandColors }: IBooking) {
    const {
        primary: colorPrimary,
        primary_darkmode: colorPrimaryDarkMode,
        secondary: colorSecondary,
        secondary_darkmode: colorSecondaryDarkMode,
        tertiary: colorTertiary,
        quaternary: colorQuaternary,
    } = brandColors;

    return (
        <Box height="100%" position="relative">
            <Topbar title={'Book'} />
            <Box marginBottom={'10px'}></Box>
            <Box mb={3} px="20px">
                <Heading as="h3" fontSize={'2xl'}>
                    Description
                </Heading>
                <Text fontSize="0.8rem">
                    Lorem ipsum dolor sit amet, maximus blandit at vitae ex.
                    Vestibulum mollis elementum nisl vel mattis. Sed efficitur
                    nunc et sapien semper{' '}
                    <Text as="span" color="teal.500">
                        see more...
                    </Text>
                </Text>
            </Box>
            <Box>
                <Calendar />
            </Box>
            <Flex
                //borderBottom={`1px solid ${colorQuaternary.hex}`}
                justifyContent="space-between"
                alignItems={'center'}
                paddingY={5}
                paddingX="20px"
            >
                <Box>
                    <Text>Price</Text>
                    <Text>
                        <Text
                            fontSize={'2rem'}
                            as="span"
                            color={colorPrimary.hex}
                        >
                            € 540
                        </Text>{' '}
                        /day
                    </Text>
                </Box>
                <Box
                    textAlign={'center'}
                    textTransform={'uppercase'}
                    color={'#fff'}
                    height={'90%'}
                    borderRadius={'7px'}
                    padding={'15px 10px'}
                    width={'150px'}
                    backgroundColor={colorPrimary.hex}
                >
                    Confirm
                </Box>
            </Flex>
            <BottomMenu />
        </Box>
    );
}
