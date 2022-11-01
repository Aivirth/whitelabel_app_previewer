import React, { useState } from 'react'
import Input from '../Input'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRoomAddr as updateRoomAddrActionCreator } from '../../../state/action_creators/roomActionCreator'
import { State } from '../../../state/reducers/index'

interface IRoomAddrInputProps {}

export default function RoomAddrInput({}: IRoomAddrInputProps) {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const dispatch = useDispatch()
  const text = useSelector((state: State) => state.room.roomAddr)

  const updateRoomAddr = bindActionCreators(
    updateRoomAddrActionCreator,
    dispatch,
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    updateRoomAddr(value)
    if (value.length >= 3) {
      setIsInvalid(false)
      setError('')
    } else {
      setIsInvalid(true)
      setError(`Indirizzo troppo breve`)
    }
  }

  return (
    <Input
      handleChange={handleChange}
      error={error}
      inputName={'roomAddr'}
      optionName={'Indirizzo'}
      isInvalid={isInvalid}
      text={text}
    />
  )
}
