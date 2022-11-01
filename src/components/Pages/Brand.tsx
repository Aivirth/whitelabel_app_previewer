import React from "react";
import BrandNameInput from "../Options/BrandNameInput";
import WhitelabelLogoUpload from "../Options/WhitelabelLogoUpload";

type IBrandProps = {};

export default function Brand({}: IBrandProps) {
  return (
    <>
      <BrandNameInput />
      <WhitelabelLogoUpload />
    </>
  );
}
