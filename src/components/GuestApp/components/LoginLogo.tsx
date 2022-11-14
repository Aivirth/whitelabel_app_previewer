import { Box, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { State } from '../../../state/reducers/index';
import demoLogo from '../../../assets/demo.png';

//type Props = {};

function LoginLogo() {
    const logo = useSelector((state: State) => state.brand.whitelabelLogo);

    const defaultLogo = demoLogo;

    return (
        <Box padding={'0px 80px 0px 80px'} marginTop={'0'}>
            <Image
                src={logo && logo !== 'default' ? logo : defaultLogo}
                marginLeft="auto"
                marginRight="auto"
                maxHeight={'200px'}
            />
        </Box>
    );
}

export default LoginLogo;
