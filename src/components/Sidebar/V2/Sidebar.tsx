import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import {
    BiArrowFromLeft as EnlargeIcon,
    BiArrowFromRight as ShrinkIcon,
} from 'react-icons/bi';
import { FiHome } from 'react-icons/fi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import {
    MdOutlineAppSettingsAlt,
    MdOutlineBedroomParent,
} from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import SummaryModalBtn from '../SummaryModalBtn';
//import { ReactComponent as LogoSmall } from '../../../../assets/icons/logo_simple.svg';
//import { ReactComponent as LogoFull } from '../../../../assets/icons/logo_full.svg';

import logoLarge from '../../../assets/icons/logo_full.svg';
import logoSmall from '../../../assets/icons/logo_simple.svg';

import NavItem from './NavItem';
interface ISidebarProps {}

const navItemsList = [
    {
        title: 'Istruzioni',
        icon: FiHome,
        isActive: true,
        uri: '/',
    },
    {
        title: 'Brand',
        icon: MdOutlineAppSettingsAlt,
        isActive: false,
        uri: '/brand',
    },
    {
        title: 'Colors',
        icon: IoColorPaletteOutline,
        isActive: false,
        uri: '/colors',
    },
    {
        title: 'Login',
        icon: RiLockPasswordLine,
        isActive: false,
        uri: '/login-and-pin',
    },
    {
        title: 'Preview Room',
        icon: MdOutlineBedroomParent,
        isActive: false,
        uri: '/preview-room',
    },
];

const Sidebar = (props: ISidebarProps) => {
    const [navSize, changeNavSize] = useState('large');

    const navItems = navItemsList.map(({ title, icon, isActive, uri }) => (
        <NavItem
            navSize={navSize}
            icon={icon}
            title={title}
            active={isActive}
            key={title}
            uri={uri}
        />
    ));
    return (
        <Flex
            pos="absolute"
            left="0"
            top="0"
            right="0"
            bottom="0"
            width="100%"
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
            w={navSize === 'small' ? '75px' : '200px'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            bg="#171c26"
            height="100%"
            transitionProperty={'all'}
            transitionDuration={'0.5s'}
            transitionTimingFunction="ease"
            alignItems={'center'}
            zIndex="10"
        >
            <Flex
                py="5%"
                px="15%"
                flexDir={'column'}
                w="100%"
                alignItems={navSize === 'small' ? 'center' : 'flex-start'}
                mt={4}
                as="nav"
                background="#171c26"
                // height="100%"
            >
                <IconButton
                    variant="ghost"
                    aria-label={'menu toggle'}
                    // marginTop={5}
                    color={'white'}
                    width={navSize === 'small' ? 'initial' : '100%'}
                    _hover={{ background: 'brand.main', color: 'white' }}
                    fontSize={'3xl'}
                    icon={
                        navSize === 'small' ? <EnlargeIcon /> : <ShrinkIcon />
                    }
                    onClick={() => {
                        if (navSize === 'small') {
                            changeNavSize('large');
                        } else {
                            changeNavSize('small');
                        }
                    }}
                />
            </Flex>

            <Image
                padding={navSize === 'large' ? '0 30px' : '0'}
                borderRadius={navSize === 'large' ? '0' : '500px'}
                src={navSize === 'small' ? logoSmall : logoLarge}
                height={navSize === 'small' ? '55px' : 'auto'}
                width={navSize === 'small' ? '55px' : 'auto'}
                margin={navSize === 'small' ? '20px auto 0px' : 'initial'}
            />

            {navItems}

            <Box marginTop="auto" borderY="1px solid #fff" w="100%">
                <SummaryModalBtn navSize={navSize} />
            </Box>
            <Text
                marginY={5}
                color={'white'}
                px={2}
                fontSize={navSize === 'small' ? 'small' : '1xl'}
            >
                Copyright Aivirth &copy;{new Date().getFullYear()}
            </Text>
        </Flex>
    );
};

export default Sidebar;
