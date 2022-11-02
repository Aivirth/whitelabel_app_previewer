import { ActionType } from '../action_types/loginAndPinActions';

interface IUpdateLoginBgImageAction {
    type: ActionType.UPDATE_LOGIN_BGIMAGE;
    payload: {
        loginBgImage: string;
    };
}

interface IUpdatePinBgImageAction {
    type: ActionType.UPDATE_PIN_BGIMAGE;
    payload: {
        pinBgImage: string;
    };
}

export type IloginAndPinAction =
    | IUpdateLoginBgImageAction
    | IUpdatePinBgImageAction;

export interface IloginAndPinState {
    loginBgImage: string | undefined | 'default';
    pinBgImage: string | undefined | 'default';
}

const initialState: IloginAndPinState = {
    loginBgImage: 'default',
    pinBgImage: 'default',
};

const loginAndPinReducer = (
    state = initialState,
    action: IloginAndPinAction,
) => {
    switch (action.type) {
        case ActionType.UPDATE_LOGIN_BGIMAGE:
            return { ...state, loginBgImage: action.payload.loginBgImage };

        case ActionType.UPDATE_PIN_BGIMAGE:
            return { ...state, pinBgImage: action.payload.pinBgImage };
        default:
            return state;
    }
};

export default loginAndPinReducer;
