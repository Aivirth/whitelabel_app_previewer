import { ActionType } from '../action_types/roomActions'
import { Dispatch } from 'redux'
import { IRoomUpdateAction } from '../reducers/roomReducer'

export const updateRoomName = (name: string) => {
  return (dispatch: Dispatch<IRoomUpdateAction>) => {
    dispatch({
      type: ActionType.ROOM_NAME_CHANGE,
      payload: {
        roomName: name,
      },
    })
  }
}

export const updateRoomDesc = (desc: string) => {
  return (dispatch: Dispatch<IRoomUpdateAction>) => {
    dispatch({
      type: ActionType.ROOM_DESC_CHANGE,
      payload: {
        roomDesc: desc,
      },
    })
  }
}

export const updateRoomAddr = (addr: string) => {
  return (dispatch: Dispatch<IRoomUpdateAction>) => {
    dispatch({
      type: ActionType.ROOM_ADDR_CHANGE,
      payload: {
        roomAddr: addr,
      },
    })
  }
}

export const updateRoomImage = (image: string) => {
  return (dispatch: Dispatch<IRoomUpdateAction>) => {
    dispatch({
      type: ActionType.ROOM_IMAGE_CHANGE,
      payload: {
        roomImage: image,
      },
    })
  }
}
