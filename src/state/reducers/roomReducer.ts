import { ActionType } from '../action_types/roomActions';
interface IRoomNameChangeAction {
    type: ActionType.ROOM_NAME_CHANGE;
    payload: {
        roomName: string;
    };
}

interface IRoomDescChangeAction {
    type: ActionType.ROOM_DESC_CHANGE;
    payload: {
        roomDesc: string;
    };
}

interface IRoomAddrChangeAction {
    type: ActionType.ROOM_ADDR_CHANGE;
    payload: {
        roomAddr: string;
    };
}

interface IRoomImageChangeAction {
    type: ActionType.ROOM_IMAGE_CHANGE;
    payload: {
        roomImage: string;
    };
}

export type IRoomUpdateAction =
    | IRoomNameChangeAction
    | IRoomDescChangeAction
    | IRoomAddrChangeAction
    | IRoomImageChangeAction;

export interface IroomState {
    roomName: string;
    roomDesc: string;
    roomAddr: string;
    roomImage: string;
}
const initialState: IroomState = {
    roomName: 'Lorem Room 5',
    roomDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    roomAddr: 'Via Umberto IX, Lorem ipsum dolor est 20093 Genova (GE)',
    roomImage:
        'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
};

const roomReducer = (state = initialState, action: IRoomUpdateAction) => {
    switch (action.type) {
        case ActionType.ROOM_NAME_CHANGE:
            return { ...state, roomName: action.payload.roomName };
        case ActionType.ROOM_DESC_CHANGE:
            return { ...state, roomDesc: action.payload.roomDesc };
        case ActionType.ROOM_ADDR_CHANGE:
            return { ...state, roomAddr: action.payload.roomAddr };
        case ActionType.ROOM_IMAGE_CHANGE:
            return { ...state, roomImage: action.payload.roomImage };

        default:
            return state;
    }
};

export default roomReducer;
