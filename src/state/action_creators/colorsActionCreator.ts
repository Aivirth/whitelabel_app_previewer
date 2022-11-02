import { ActionType } from '../action_types/colorsActions';
import { Dispatch } from 'redux';
import { IColorChangeAction } from '../reducers/colorsReducer';

export const updateColor = (color: string, hex: string, rgb: string) => {
    return (dispatch: Dispatch<IColorChangeAction>) => {
        dispatch({
            type: ActionType.UPDATE_COLOR,
            payload: {
                color,
                hex,
                rgb,
            },
        });
    };
};
