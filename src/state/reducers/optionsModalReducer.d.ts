import { ActionType } from "../action_types/optionsModalActions";

interface IOptionsModalCloseAction {
  type: ActionType.OPTIONS_MODAL_OPEN;
}

interface IOptionsModalOpenAction {
  type: ActionType.OPTIONS_MODAL_CLOSE;
}

interface IOptionsModalOpenToggle {
  type: ActionType.OPTIONS_MODAL_TOGGLE;
}

export type IOptionsModalAction =
  | IOptionsModalCloseAction
  | IOptionsModalOpenAction
  | IOptionsModalOpenToggle;

export interface IOptionsModalState {
  isOpen: boolean;
}
