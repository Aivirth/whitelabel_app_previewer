import { Text } from '@chakra-ui/react';
import React from 'react';
import OptionName from '../Options/Layout/OptionName';

type IHomeProps = {};

export default function Home(_props: IHomeProps) {
    return (
        <>
            <OptionName text={'Istruzioni'} />
            <Text as="p" color={'red.800'} textTransform="uppercase">
                Software in pre-alpha
            </Text>
        </>
    );
}
