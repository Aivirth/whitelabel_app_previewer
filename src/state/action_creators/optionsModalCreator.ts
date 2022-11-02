import { ActionType } from '../action_types/optionsModalActions';
import { Dispatch } from 'redux';
import { IOptionsModalAction } from '../reducers/optionsModalReducer';

export const openOptionsModal = () => {
    return (dispatch: Dispatch<IOptionsModalAction>) => {
        dispatch({
            type: ActionType.OPTIONS_MODAL_OPEN,
        });
    };
};

export const closeOptionsModal = () => {
    return (dispatch: Dispatch<IOptionsModalAction>) => {
        dispatch({
            type: ActionType.OPTIONS_MODAL_CLOSE,
        });
    };
};

export const toggleOptionsModal = () => {
    return (dispatch: Dispatch<IOptionsModalAction>) => {
        dispatch({
            type: ActionType.OPTIONS_MODAL_TOGGLE,
        });
    };
};
