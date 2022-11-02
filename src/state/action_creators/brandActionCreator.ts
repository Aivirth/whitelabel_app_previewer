import { ActionType } from '../action_types/brandActions';
import { Dispatch } from 'redux';
import { IbrandAction } from '../reducers/brandReducer';

export const updateBrandName = (name: string) => {
    return (dispatch: Dispatch<IbrandAction>) => {
        dispatch({
            type: ActionType.BRAND_NAME_CHANGE,
            payload: {
                brandName: name,
            },
        });
    };
};

export const updateWhitelabelLogo = (base64Logo: string) => {
    return (dispatch: Dispatch<IbrandAction>) => {
        dispatch({
            type: ActionType.WHITELABEL_LOGO_CHANGE,
            payload: {
                whitelabelLogo: base64Logo,
            },
        });
    };
};

export const updateContrastLogo = (enable: boolean) => {
    return (dispatch: Dispatch<IbrandAction>) => {
        dispatch({
            type: ActionType.CONTRAST_LOGO_CHANGE,
            payload: {
                enableContrast: enable,
            },
        });
    };
};
