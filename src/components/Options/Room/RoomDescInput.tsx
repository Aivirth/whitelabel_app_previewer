import React, { useState } from 'react';
import Input from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRoomDesc as updateRoomDescActionCreator } from '../../../state/action_creators/roomActionCreator';
import { State } from '../../../state/reducers/index';

interface IRoomDescInputProps {}

export default function RoomDescInput(_props: IRoomDescInputProps) {
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch();
    const text = useSelector((state: State) => state.room.roomDesc);

    const updateRoomDesc = bindActionCreators(
        updateRoomDescActionCreator,
        dispatch,
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        updateRoomDesc(value);
        if (value.length >= 3) {
            setIsInvalid(false);
            setError('');
        } else {
            setIsInvalid(true);
            setError(`Description too short`);
        }
    };

    return (
        <Input
            handleChange={handleChange}
            error={error}
            inputName={'roomDesc'}
            optionName={'Room Description'}
            isInvalid={isInvalid}
            text={text}
            isTextarea={true}
        />
    );
}
