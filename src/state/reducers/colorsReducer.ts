import { ActionType } from "../action_types/colorsActions";

import { IColorChangeAction, IcolorsState } from "./colorsReducer.d";

const initialState: IcolorsState = {
  primary: {
    hex: "#919191",
    rgb: "145, 145, 145",
  },
  primary_darkmode: {
    hex: "#B4B4B4",
    rgb: "180, 180, 180",
  },
  secondary: {
    hex: "#9F968C",
    rgb: "159,150,140",
  },
  secondary_darkmode: {
    hex: "#C2B7A9",
    rgb: "194,183,169",
  },
  tertiary: {
    hex: "#919191",
    rgb: "145,145,145",
  },
  quaternary: {
    hex: "#DCDCDC",
    rgb: "220,220,220",
  },
  success: {
    hex: "#DCDCDC",
    rgb: "220,220,220",
  },
  danger: {
    hex: "#DCDCDC",
    rgb: "220,220,220",
  },
};

const colorsReducer = (state = initialState, action: IColorChangeAction) => {
  switch (action.type) {
    case ActionType.UPDATE_COLOR:
      //   console.log(action);
      const updatedColorValues = {
        hex: action.payload.hex,
        rgb: action.payload.rgb,
      };
      const colorToUpdate = { [action.payload.color]: updatedColorValues };

      //   console.log({ updatedColorValues });
      return { ...state, ...colorToUpdate };

    default:
      return state;
  }
};

export default colorsReducer;
