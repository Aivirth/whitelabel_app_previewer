import { Box, Flex } from '@chakra-ui/react';
import bgLogin from '../../../assets/bgLogin.jpg';
import { loginGradientBg } from '../../../helpers';
import { IcolorsState } from '../../../state/reducers/colorsReducer';
import LoginField from '../components/Login/LoginField';
import LoginLogo from '../components/LoginLogo';

type Props = {
    brandColors: IcolorsState;

    loginBgImage: string | undefined | 'default';
};

export default function Login({ brandColors, loginBgImage }: Props) {
    const {
        primary: colorPrimary,
        //primary_darkmode: colorPrimaryDarkMode,
        //secondary: colorSecondary,
        //secondary_darkmode: colorSecondaryDarkMode,
        tertiary: colorTertiary,
        //quaternary: colorQuaternary,
    } = brandColors;

    const defaultBgImage = bgLogin;

    const loginBtn = (
        <Box
            as="button"
            width="80%"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            backgroundColor={colorTertiary.hex}
            borderColor={colorTertiary.hex}
            background={colorTertiary.hex}
            textTransform={'uppercase'}
            marginTop={10}
            paddingX="25px"
            paddingY={'15px'}
            borderRadius="2px"
            fontSize="14px"
            fontWeight="semibold"
            color="#FFF"
            _hover={{ bg: '#ebedf0', color: colorTertiary.hex }}
            _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
        >
            Login
        </Box>
    );

    const registerBtn = (
        <Box
            as="button"
            width="80%"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px solid"
            textTransform={'uppercase'}
            backgroundColor={'transparent'}
            borderColor={colorTertiary.hex}
            background={'transparent'}
            marginTop={5}
            paddingX="25px"
            paddingY={'15px'}
            borderRadius="2px"
            fontSize="14px"
            fontWeight="semibold"
            color={colorTertiary.hex}
            _hover={{ bg: '#ebedf0' }}
            _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
        >
            Register
        </Box>
    );

    const renderedBgImage =
        loginBgImage && loginBgImage !== 'default'
            ? loginBgImage
            : defaultBgImage;
    return (
        <Flex
            color={'white'}
            backgroundImage={loginGradientBg(colorPrimary.rgb, renderedBgImage)}
            backgroundColor={`rgb(${colorPrimary.rgb})`}
            backgroundSize="cover , cover"
            flexDir={'column'}
            // height="100%"
            height="740px"
            alignItems="center"
            justifyContent="center"
        >
            <LoginLogo />
            <LoginField
                name={'username_login'}
                type={'user'}
                text={'Username'}
            />
            <LoginField
                name={'password_login'}
                type={'password'}
                text={'Password'}
            />
            {loginBtn}
            {registerBtn}
        </Flex>
    );
}
