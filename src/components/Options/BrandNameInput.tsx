import React, { useState } from 'react';
import { Input as ChakraInput, Text, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import OptionName from './Layout/OptionName';
import { updateBrandName as updateBrandNameActionCreator } from '../../state/action_creators/brandActionCreator';
import { State } from '../../state/reducers/index';

//interface IBrandNameInputProps {}

export default function BrandNameInput(): JSX.Element {
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch();
    const text = useSelector((state: State) => state.brand.brandName);

    const updateBrandName = bindActionCreators(
        updateBrandNameActionCreator,
        dispatch,
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const whitelabelName = e.target.value;
        if (whitelabelName.length <= 30) {
            updateBrandName(whitelabelName);
            setIsInvalid(false);
            setError('');
        } else {
            setIsInvalid(true);
            setError(`Numero di caratteri massimo 30/${whitelabelName.length}`);
        }
    };

    const ErrorMessage = () => {
        return <Text as="p">{error}</Text>;
    };

    return (
        <Box mb={6}>
            <OptionName text={'Nome App'} />
            <ChakraInput
                variant="outline"
                placeholder="Nome App"
                focusBorderColor="green.500"
                errorBorderColor="red.800"
                isInvalid={isInvalid}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                }}
                value={text}
                name="brandName"
            />
            {isInvalid ?? <ErrorMessage />}
        </Box>
    );
}
