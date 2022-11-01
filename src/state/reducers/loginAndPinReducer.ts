import { ActionType } from "../action_types/loginAndPinActions";

import { IloginAndPinAction, IloginAndPinState } from "./loginAndPinReducer.d";

const initialState: IloginAndPinState = {
  loginBgImage: "default",
  pinBgImage: "default",
};

const loginAndPinReducer = (
  state = initialState,
  action: IloginAndPinAction
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
