import { ActionType } from '../action_types/colorsActions';
import { Dispatch } from 'redux';
import {
    IColorChangeAction,
    IcolorsState,
    ISettingsColorsRestoreAction,
} from '../reducers/colorsReducer';

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

export const settingsColorsRestore = (oldColors: IcolorsState) => {
    return (dispatch: Dispatch<ISettingsColorsRestoreAction>) => {
        dispatch({
            type: ActionType.SETTINGS_COLORS_RESTORE_SUCCESS,
            payload: {
                oldColors,
            },
        });
    };
};
