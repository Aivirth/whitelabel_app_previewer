import {
    FaUserCog as UserIcon,
    FaGlobeAmericas as GlobeIcon,
} from 'react-icons/fa';
import { AiOutlineCalendar as CalendarIcon } from 'react-icons/ai';
import { BiHelpCircle as HelpIcon } from 'react-icons/bi';
import { Center, Text, Stack, Flex, Box } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useSelector } from 'react-redux';
import { State } from '../../../../state/reducers';
import { ColorAccessKey } from '../../../../state/reducers/colorsReducer';

interface IBottomMenu {}
type MenuItem = {
    Icon: IconType;
    name: string;
};

const menuItems: MenuItem[] = [
    {
        Icon: UserIcon,
        name: 'bottom_menu_1',
    },
    {
        Icon: CalendarIcon,
        name: 'bottom_menu_2',
    },
    {
        Icon: HelpIcon,
        name: 'bottom_menu_3',
    },
    {
        Icon: GlobeIcon,
        name: 'bottom_menu_4',
    },
];

export default function BottomMenu({}: IBottomMenu) {
    const colors = useSelector((state: State) => state.colors);
    return (
        <Box
            display={'flex'}
            justifyContent="space-evenly"
            marginTop="auto"
            marginBottom="20px"
            position={'absolute'}
            bottom="0"
            width="100%"
            paddingTop="20px"
            zIndex={'999'}
            _before={{
                position: 'absolute',
                paddingTop: '-20px',
                boxShadow: '0px -2px 5px 0px rgb(100, 100, 100,  30%)',
                content: "''",
                width: '100%',
                height: '100%',
                display: 'block',
                top: 0,
            }}
        >
            {menuItems.map(({ Icon, name }) => {
                const colorName = colors[name as ColorAccessKey];
                return (
                    <Box
                        display={'inline-block'}
                        height="70px"
                        width="70px"
                        borderRadius={'15px'}
                        overflow="hidden"
                        key={name}
                    >
                        <Center
                            height={'100%'}
                            width="100%"
                            fontSize={'2rem'}
                            color={colorName.hex}
                            bgColor={`rgba(${colorName.rgb} , 0.3)`}
                        >
                            <Icon />
                        </Center>
                    </Box>
                );
            })}
        </Box>
    );
}
