import { Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../state/reducers/index';
import ColorPicker from './ColorPicker';
import OptionName from './Layout/OptionName';

import { updateColor as updateColorActionCreator } from '../../state/action_creators/colorsActionCreator';
import { IcolorsState } from '../../state/reducers/colorsReducer';

interface IBrandColorPickerProps {
    brandColorName: keyof IcolorsState;
    title: string;
}

export default function BrandColorPicker({
    brandColorName,
    title,
}: IBrandColorPickerProps) {
    const dispatch = useDispatch();
    const color = useSelector((state: State) => state.colors[brandColorName]);

    const updateColor = bindActionCreators(updateColorActionCreator, dispatch);

    return (
        <>
            <OptionName text={title} />
            <Flex justifyContent={'center'}>
                <ColorPicker
                    inputName={brandColorName}
                    reduxDispatcher={updateColor}
                    reduxStateElement={color}
                />
            </Flex>
        </>
    );
}
