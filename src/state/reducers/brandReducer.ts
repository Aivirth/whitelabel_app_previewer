import { ActionType } from '../action_types/brandActions';

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
    whitelabelLogo: string | undefined | 'default';
    contrastLogoEnabled: boolean;
}

const initialState: IbrandState = {
    brandName: 'Whitelabel App',
    whitelabelLogo: 'default',
    contrastLogoEnabled: false,
};

const brandReducer = (state = initialState, action: IbrandAction) => {
    switch (action.type) {
        case ActionType.BRAND_NAME_CHANGE:
            return { ...state, brandName: action.payload.brandName };

        case ActionType.WHITELABEL_LOGO_CHANGE:
            return { ...state, whitelabelLogo: action.payload.whitelabelLogo };

        case ActionType.CONTRAST_LOGO_CHANGE:
            return {
                ...state,
                contrastLogoEnabled: action.payload.enableContrast,
            };

        default:
            return state;
    }
};

export default brandReducer;
