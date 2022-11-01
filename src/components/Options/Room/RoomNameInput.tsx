import React, { useState } from 'react'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRoomName as updateRoomNameActionCreator } from '../../../state/action_creators/roomActionCreator'
import { State } from '../../../state/reducers/index'

interface IRoomNameInputProps {}

export default function RoomNameInput({}: IRoomNameInputProps) {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const dispatch = useDispatch()
  const text = useSelector((state: State) => state.room.roomName)

  const updateRoomName = bindActionCreators(
    updateRoomNameActionCreator,
    dispatch,
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // console.log(e.target.value)
    updateRoomName(value)
    if (value.length >= 3) {
      setIsInvalid(false)
      setError('')
    } else {
      setIsInvalid(true)
      setError(`Inserire un nome valido`)
    }
  }

  return (
    <Input
      handleChange={handleChange}
      error={error}
      inputName={'roomName'}
      optionName={'Nome Camera'}
      isInvalid={isInvalid}
      text={text}
    />
  )
}
