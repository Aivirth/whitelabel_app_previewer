import { Text } from '@chakra-ui/react';
import OptionName from '../Options/Layout/OptionName';

type IHomeProps = {};

export default function Home(_props: IHomeProps) {
    return (
        <>
            <OptionName text={'Overview'} />
            <Text as="p" color={'red.800'} textTransform="uppercase">
                Coming Soon...
            </Text>
        </>
    );
}
