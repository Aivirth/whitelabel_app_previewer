import { IcolorsState } from '../state/reducers/colorsReducer';

export type ColorOptions = {
    store_key: keyof IcolorsState;
    alias: string;
};

export const colori: Array<ColorOptions> = [
    {
        store_key: 'primary',
        alias: 'Primary',
    },
    {
        store_key: 'primary_darkmode',
        alias: 'Primary Dark Mode',
    },
    {
        store_key: 'secondary',
        alias: 'Secondary',
    },
    {
        store_key: 'secondary_darkmode',
        alias: 'Secondary Dark Mode',
    },
    {
        store_key: 'tertiary',
        alias: 'Tertiary',
    },
    {
        store_key: 'quaternary',
        alias: 'Quaternary',
    },
    {
        store_key: 'success',
        alias: 'Success',
    },
    {
        store_key: 'danger',
        alias: 'Error',
    },
    {
        store_key: 'bottom_menu_1',
        alias: 'Bottom Bar Color 1',
    },
    {
        store_key: 'bottom_menu_2',
        alias: 'Bottom Bar Color 2',
    },
    {
        store_key: 'bottom_menu_3',
        alias: 'Bottom Bar Color 3',
    },
    {
        store_key: 'bottom_menu_4',
        alias: 'Bottom Bar Color 4',
    },
];
