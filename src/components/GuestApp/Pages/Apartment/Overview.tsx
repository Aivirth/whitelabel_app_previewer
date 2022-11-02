import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import Topbar from '../../components/shared/Topbar';
import BottomMenu from '../../components/shared/BottomMenu';
import { RiMapPinFill as AddressMarker } from 'react-icons/ri';
import { BiBed as BedIcon, BiBath as BathIcon } from 'react-icons/bi';
import { IoExpand as AreaIcon } from 'react-icons/io5';
import { AiFillStar as StarIcon } from 'react-icons/ai';
import { TiChevronRight } from 'react-icons/ti';
import { IcolorsState } from '../../../../state/reducers/colorsReducer';

type Props = {
    brandColors: IcolorsState;
};

const Amenities = () => {
    const amenities = [
        {
            text: '2 Beds',
            Icon: BedIcon,
        },
        {
            text: '1 Bath',
            Icon: BathIcon,
        },
        {
            text: '2230 Square fit',
            Icon: AreaIcon,
        },
    ];
    return (
        <Flex
            justifyContent={'space-between'}
            fontSize="0.9rem"
            marginBottom={3}
        >
            {amenities.map(({ text, Icon }) => (
                <Flex alignItems={'center'}>
                    <Box
                        background="gray.200"
                        padding="3px"
                        marginRight={2}
                        fontSize="1rem"
                    >
                        <Icon />
                    </Box>
                    <Text>{text}</Text>
                </Flex>
            ))}
        </Flex>
    );
};

const Reviews = () => {
    return (
        <Flex color="yellow.300" fontSize={'1.1rem'} marginBottom={2}>
            <StarIcon />
            <Text fontSize={'0.7rem'} color={'gray.500'} marginLeft={2}>
                4.7 (341 Reviews)
            </Text>
        </Flex>
    );
};

function Overview({ brandColors }: Props) {
    const {
        primary: colorPrimary,
        primary_darkmode: colorPrimaryDarkMode,
        secondary: colorSecondary,
        secondary_darkmode: colorSecondaryDarkMode,
        tertiary: colorTertiary,
        quaternary: colorQuaternary,
    } = brandColors;

    return (
        <Flex flexDir={'column'} position="relative" height={'100%'}>
            <Topbar title={'Apartment'} />
            <Box marginBottom={'10px'}>
                <Image
                    src={
                        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    }
                />
            </Box>

            <Box padding={'0 15px'}>
                <Text fontWeight={'bold'} marginBottom={3}>
                    Luxury Apartment 3
                </Text>
                <Flex
                    alignItems={'center'}
                    borderBottom={`1px solid ${colorQuaternary.hex}`}
                    paddingBottom={'10px'}
                    flexWrap="wrap"
                    marginBottom={5}
                >
                    <AddressMarker
                        fontSize={'1.5rem'}
                        color={colorSecondary.hex}
                    />

                    <Box
                        marginRight={1}
                        marginLeft={5}
                        fontStyle={'italic'}
                        fontSize={'0.8rem'}
                    >
                        <Text>Via adriatica 62, 47843</Text>
                        <Text>Misano Adriatico (RN)</Text>
                    </Box>
                </Flex>

                <Box
                    borderBottom={`1px solid ${colorQuaternary.hex}`}
                    marginBottom={'10px'}
                    paddingBottom={'10px'}
                >
                    <Amenities />
                    <Reviews />
                </Box>

                {/* Book + price */}
                <Flex
                    //borderBottom={`1px solid ${colorQuaternary.hex}`}
                    justifyContent="space-between"
                    alignItems={'center'}
                    paddingY={5}
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
                        Book
                    </Box>
                </Flex>
            </Box>
            <BottomMenu />
        </Flex>
    );
}

export default Overview;
