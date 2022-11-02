import { IcolorsState } from '../state/reducers/colorsReducer';

export type ColorOptions = {
    store_key: keyof IcolorsState;
    alias: string;
};

export const colori: Array<ColorOptions> = [
    {
        store_key: 'primary',
        alias: 'Primario',
    },
    {
        store_key: 'primary_darkmode',
        alias: 'Primario Light',
    },
    {
        store_key: 'secondary',
        alias: 'Secondario',
    },
    {
        store_key: 'secondary_darkmode',
        alias: 'Secondario Light',
    },
    {
        store_key: 'tertiary',
        alias: 'Terziario',
    },
    {
        store_key: 'quaternary',
        alias: 'Quaternario',
    },
    {
        store_key: 'success',
        alias: 'Successo',
    },
    {
        store_key: 'danger',
        alias: 'Errore',
    },
];
