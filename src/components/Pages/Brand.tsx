import React from 'react';
import BrandNameInput from '../Options/BrandNameInput';
import WhitelabelLogoUpload from '../Options/WhitelabelLogoUpload';

type IBrandProps = {};

export default function Brand(_props: IBrandProps) {
    return (
        <>
            <BrandNameInput />
            <WhitelabelLogoUpload />
        </>
    );
}
