import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateWhitelabelLogo as updateWhitelabelLogoActionCreator } from '../../state/action_creators/brandActionCreator';
import { State } from '../../state/reducers/index';
import ImageUpload from './ImageUpload';
import { Box } from '@chakra-ui/react';
import OptionName from './Layout/OptionName';

type Props = {};

function WhitelabelLogoUpload(_props: Props) {
    const dispatch = useDispatch();
    const logo = useSelector((state: State) => state.brand.whitelabelLogo);

    const updateWhitelabelLogo = bindActionCreators(
        updateWhitelabelLogoActionCreator,
        dispatch,
    );

    return (
        <Box mb={6}>
            <OptionName text={'Logo'} />
            <ImageUpload
                inputName={'whitelabelLogo'}
                reduxStateElement={logo}
                reduxDispatcher={updateWhitelabelLogo}
                contrastControl={true}
            />
        </Box>
    );
}

export default WhitelabelLogoUpload;
