import { ActionType } from "../action_types/brandActions";

interface IBrandNameChangeAction {
  type: ActionType.BRAND_NAME_CHANGE;
  payload: {
    brandName: string;
  };
}

interface IBrandWhitelabelLogoChangeAction {
  type: ActionType.WHITELABEL_LOGO_CHANGE;
  payload: {
    whitelabelLogo: string;
  };
}

interface IContrastLogoChangeAction {
    type: ActionType.CONTRAST_LOGO_CHANGE;
    payload: {
        enableContrast: boolean;
    };
  }

export type IbrandAction =
  | IBrandNameChangeAction
  | IBrandWhitelabelLogoChangeAction
  | IContrastLogoChangeAction;

export interface IbrandState {
  brandName: string;
  whitelabelLogo: string | undefined | "default";
  contrastLogoEnabled : boolean
}
