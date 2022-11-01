import React from 'react'
import RoomAddrInput from '../Options/Room/RoomAddrInput'
import RoomDescInput from '../Options/Room/RoomDescInput'
import RoomImageUpload from '../Options/Room/RoomImageUpload'
import RoomNameInput from '../Options/Room/RoomNameInput'

type IPreviewCameraProps = {}

export default function PreviewCamera({}: IPreviewCameraProps) {
  return (
    <>
      <RoomNameInput />
      <RoomDescInput />
      <RoomAddrInput />
      <RoomImageUpload />
    </>
  )
}
