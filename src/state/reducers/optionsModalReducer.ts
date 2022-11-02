import { ActionType } from '../action_types/optionsModalActions';

interface IOptionsModalCloseAction {
    type: ActionType.OPTIONS_MODAL_OPEN;
}

interface IOptionsModalOpenAction {
    type: ActionType.OPTIONS_MODAL_CLOSE;
}

interface IOptionsModalOpenToggle {
    type: ActionType.OPTIONS_MODAL_TOGGLE;
}

export type IOptionsModalAction =
    | IOptionsModalCloseAction
    | IOptionsModalOpenAction
    | IOptionsModalOpenToggle;

export interface IOptionsModalState {
    isOpen: boolean;
}

const initialState: IOptionsModalState = {
    isOpen: true,
};

const brandReducer = (state = initialState, action: IOptionsModalAction) => {
    switch (action.type) {
        case ActionType.OPTIONS_MODAL_OPEN:
            return { ...state, isOpen: true };

        case ActionType.OPTIONS_MODAL_CLOSE:
            return { ...state, isOpen: false };

        case ActionType.OPTIONS_MODAL_TOGGLE:
            return { ...state, isOpen: !state.isOpen };

        default:
            return state;
    }
};

export default brandReducer;
