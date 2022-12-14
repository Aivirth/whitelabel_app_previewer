import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePinBgImage as updatePinBgImageActionCreator } from '../../state/action_creators/loginAndPinActionCreator';
import { State } from '../../state/reducers/index';
import ImageUpload from './ImageUpload';
import { Box } from '@chakra-ui/react';
import OptionName from './Layout/OptionName';
import { imageInputInstruction } from '../../utils/utils';

type Props = {};

function PinBgImageUpload(_props: Props) {
    const dispatch = useDispatch();
    const image = useSelector((state: State) => state.loginAndPin.pinBgImage);

    const updatePinBgImage = bindActionCreators(
        updatePinBgImageActionCreator,
        dispatch,
    );

    return (
        <Box mb={6}>
            <OptionName text={'Pin'} />
            <ImageUpload
                inputName={'pinBgImage'}
                reduxStateElement={image}
                reduxDispatcher={updatePinBgImage}
                caption={imageInputInstruction()}
            />
        </Box>
    );
}

export default PinBgImageUpload;
