import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import optionsModalReducer from "./optionsModalReducer";
import colorsReducer from "./colorsReducer";
import loginAndPinReducer from "./loginAndPinReducer";
import roomReducer from './roomReducer'

const reducers = combineReducers({
  brand: brandReducer,
  optionsModal: optionsModalReducer,
  colors: colorsReducer,
  loginAndPin: loginAndPinReducer,
  room : roomReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;
