import { Box, Flex, Text } from '@chakra-ui/react';
import { CgMenuBoxed as MenuIcon } from 'react-icons/cg';
import { FaChevronCircleLeft as BackIcon } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { State } from '../../../../state/reducers';
type Props = { title: string };

function Topbar({ title }: Props) {
    const colors = useSelector((state: State) => state.colors);
    const {
        primary: colorPrimary,
        //primary_darkmode: colorPrimaryDarkMode
    } = colors;
    return (
        <Flex
            background={colorPrimary.hex}
            color="white"
            alignItems={'center'}
            padding="10px 5px"
        >
            <Box fontSize={'1.5rem'} marginLeft="15px">
                <BackIcon />
            </Box>
            <Box marginX="auto">
                <Text as="h1" textTransform={'uppercase'} fontWeight={'bold'}>
                    {title}
                </Text>
            </Box>
            <Box textAlign={'center'}>
                <Flex
                    justifyContent={'flex-end'}
                    marginLeft={'auto'}
                    marginRight={'15px'}
                    fontSize="2rem"
                >
                    <MenuIcon fill={'#ffffff'} display={'block'} />
                </Flex>
            </Box>
        </Flex>
    );
}

export default Topbar;
