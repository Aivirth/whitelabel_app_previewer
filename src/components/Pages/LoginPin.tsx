import React from "react";
import LoginBgImageUpload from "../Options/LoginBgImageUpload";
import PinBgImageUpload from "../Options/PinBgImageUpload";

type ILoginPinProps = {};

export default function LoginPin({}: ILoginPinProps) {
  return (
    <>
      <LoginBgImageUpload />
      <PinBgImageUpload />
    </>
  );
}
