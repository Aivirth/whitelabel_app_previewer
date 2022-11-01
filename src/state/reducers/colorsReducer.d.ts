import { ActionType } from "../action_types/colorsActions";

type Color = {
  hex: string;
  rgb: string;
};

export interface IColorChangeAction {
  type: ActionType.UPDATE_COLOR;
  payload: {
    color: string;
    hex: string;
    rgb: string;
  };
}

export interface IcolorsState {
  primary: Color;
  primary_darkmode: Color;
  secondary: Color;
  secondary_darkmode: Color;
  tertiary: Color;
  quaternary: Color;
  success: Color;
  danger: Color;
}
