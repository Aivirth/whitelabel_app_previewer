import { ActionType } from "../action_types/brandActions";

import { IbrandAction, IbrandState } from "./brandReducer.d";

const initialState: IbrandState = {
  brandName: "Whitelabel App",
  whitelabelLogo: "default",
  contrastLogoEnabled : false
};

const brandReducer = (state = initialState, action: IbrandAction) => {
  switch (action.type) {
    case ActionType.BRAND_NAME_CHANGE:
      return { ...state, brandName: action.payload.brandName };

    case ActionType.WHITELABEL_LOGO_CHANGE:
      return { ...state, whitelabelLogo: action.payload.whitelabelLogo };

    case ActionType.CONTRAST_LOGO_CHANGE:
        return { ...state, contrastLogoEnabled: action.payload.enableContrast };

    default:
      return state;
  }
};

export default brandReducer;
