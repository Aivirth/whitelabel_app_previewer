import { ActionType } from "../action_types/loginAndPinActions";
import { Dispatch } from "redux";
import { IloginAndPinAction } from "../reducers/loginAndPinReducer.d";

export const updateLoginBgImage = (image: string) => {
  return (dispatch: Dispatch<IloginAndPinAction>) => {
    dispatch({
      type: ActionType.UPDATE_LOGIN_BGIMAGE,
      payload: {
        loginBgImage: image,
      },
    });
  };
};

export const updatePinBgImage = (image: string) => {
    return (dispatch: Dispatch<IloginAndPinAction>) => {
      dispatch({
        type: ActionType.UPDATE_PIN_BGIMAGE,
        payload: {
          pinBgImage: image,
        },
      });
    };
  };
