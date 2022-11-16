import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRoomImage as updateRoomImageActionCreator } from '../../../state/action_creators/roomActionCreator';
import { State } from '../../../state/reducers/index';
import ImageUpload from '../ImageUpload';
import { Box } from '@chakra-ui/react';
import OptionName from '../Layout/OptionName';
import { imageInputInstruction } from '../../../utils/utils';

type Props = {};

function RoomImageUpload(_props: Props) {
    const dispatch = useDispatch();
    const image = useSelector((state: State) => state.room.roomImage);

    const updateRoomImage = bindActionCreators(
        updateRoomImageActionCreator,
        dispatch,
    );

    return (
        <Box mb={6}>
            <OptionName text={'Picture'} />
            <ImageUpload
                inputName={'roomImage'}
                reduxStateElement={image}
                reduxDispatcher={updateRoomImage}
                caption={imageInputInstruction()}
            />
        </Box>
    );
}

export default RoomImageUpload;
