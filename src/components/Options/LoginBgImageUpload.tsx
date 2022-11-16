import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLoginBgImage as updateLoginBgImageActionCreator } from '../../state/action_creators/loginAndPinActionCreator';
import { State } from '../../state/reducers/index';
import ImageUpload from './ImageUpload';
import { Box } from '@chakra-ui/react';
import OptionName from './Layout/OptionName';
import { imageInputInstruction } from '../../utils/utils';

//type Props = {};

function LoginBgImageUpload() {
    const dispatch = useDispatch();
    const image = useSelector((state: State) => state.loginAndPin.loginBgImage);

    const updateLoginBgImage = bindActionCreators(
        updateLoginBgImageActionCreator,
        dispatch,
    );

    return (
        <Box mb={6}>
            <OptionName text={'Login'} />
            <ImageUpload
                inputName={'loginBgImage'}
                reduxStateElement={image}
                reduxDispatcher={updateLoginBgImage}
                caption={imageInputInstruction()}
            />
        </Box>
    );
}

export default LoginBgImageUpload;
