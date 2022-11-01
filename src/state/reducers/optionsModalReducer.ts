import { ActionType } from "../action_types/optionsModalActions";

import {
  IOptionsModalState,
  IOptionsModalAction,
} from "./optionsModalReducer.d";

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
