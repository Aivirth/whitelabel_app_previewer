import { ActionType } from '../action_types/loginAndPinActions'

interface IUpdateLoginBgImageAction {
  type: ActionType.UPDATE_LOGIN_BGIMAGE
  payload: {
    loginBgImage: string
  }
}

interface IUpdatePinBgImageAction {
  type: ActionType.UPDATE_PIN_BGIMAGE
  payload: {
    pinBgImage: string
  }
}

export type IloginAndPinAction =
  | IUpdateLoginBgImageAction
  | IUpdatePinBgImageAction

export interface IloginAndPinState {
  loginBgImage: string | undefined | 'default'
  pinBgImage: string | undefined | 'default'
}
