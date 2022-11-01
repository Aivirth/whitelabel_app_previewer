import React from 'react'
import {
  Box,
  Input as ChakraInput,
  Text,
  Textarea as ChakraTextarea,
} from '@chakra-ui/react'
import OptionName from './Layout/OptionName'

interface IInputProps {
  inputName: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  optionName?: string
  isInvalid: boolean
  text: string
  error: string
  placeholder?: string | undefined
  isTextarea?: boolean
}

export default function Input({
  inputName,
  handleChange,
  optionName,
  error,
  text,
  isInvalid = false,
  placeholder,
  isTextarea = false,
}: IInputProps) {
  const ErrorMessage = () => {
    return <Text as="p">{error}</Text>
  }

  return (
    <Box mb={6}>
      {optionName && <OptionName text={optionName} />}
      {isTextarea ? (
        <ChakraTextarea
          variant="outline"
          placeholder={placeholder}
          focusBorderColor="gray.500"
          errorBorderColor="red.800"
          isInvalid={isInvalid}
          onChange={(e: any)=> {
            return handleChange(e)
          }}
          value={text}
          name={inputName}
        />
      ) : (
        <ChakraInput
          variant="outline"
          placeholder={placeholder}
          focusBorderColor="gray.500"
          errorBorderColor="red.800"
          isInvalid={isInvalid}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e)
          }}
          value={text}
          name={inputName}
        />
      )}
      {isInvalid && <ErrorMessage />}
    </Box>
  )
}
