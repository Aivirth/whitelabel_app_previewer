import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { SketchPicker, ColorResult, RGBColor } from 'react-color'
import { Color } from '../../state/reducers/colorsReducer.d'
import { HexToRGB } from '../../utils/utils'
import { v4 as uuidv4 } from 'uuid'

interface IColorPickerProps {
  inputName: string
  reduxStateElement?: string | Color
  reduxDispatcher?: Function
}

export default function ColorPicker({
  inputName,
  reduxDispatcher,
  reduxStateElement,
}: IColorPickerProps) {
  const [currentColor, setCurrentColor] = useState<string>('#333333')
  const [previousColor, setPreviousColor] = useState<string>('#333333')
  const [previewMode, setPreviewMode] = useState<boolean>(false)

  useEffect(() => {
    if (
      reduxDispatcher &&
      reduxStateElement &&
      reduxStateElement !== undefined
    ) {
      if (typeof reduxStateElement === 'string') {
        setCurrentColor(reduxStateElement)
        setPreviousColor(reduxStateElement)
      } else {
        setCurrentColor(reduxStateElement.hex)
        setPreviousColor(reduxStateElement.hex)
      }
    }
  }, [reduxDispatcher, reduxStateElement])

  const convertRgbToString = ({ r, g, b }: RGBColor) => {
    return `${r}, ${g}, ${b}`
  }

  const handleColorChange = (color: ColorResult) => {
    setCurrentColor(color.hex)

    if (previewMode) {
      if (reduxDispatcher && reduxStateElement) {
        reduxDispatcher(inputName, color.hex, convertRgbToString(color.rgb))
      }
    }
  }

  const cancelColorChange = () => {
    setCurrentColor(previousColor)
  }

  const applyColorChange = () => {
    setPreviousColor(currentColor)
    if (reduxDispatcher && reduxStateElement) {
      const newColor = HexToRGB(currentColor)
      if (newColor) {
        reduxDispatcher(inputName, currentColor, convertRgbToString(newColor))
      }
    }
  }
  const colorPickerId = 'enablePreview' + uuidv4()

  return (
    <Flex flexDir={'column'} alignItems="center">
      <SketchPicker
        color={currentColor}
        onChange={handleColorChange}
        presetColors={[]}
        disableAlpha={true}
        width={'75%'}
      />
      <Flex
        marginTop={8}
        justifyContent={'space-evenly'}
        width={'100%'}
        flexWrap="wrap"
      >
        <Flex justifyContent={'center'} flex={'0 0 100%'}>
          <FormControl display="flex" alignItems="center" width={'auto'} marginRight={2}>
            <FormLabel htmlFor={colorPickerId} mb="0">
              Anteprima
            </FormLabel>
            <Switch
              id={colorPickerId}
              size="lg"
              isChecked={previewMode}
              onChange={() => setPreviewMode(!previewMode)}
            />
          </FormControl>

          <ButtonGroup gap="0" visibility={previewMode ? 'hidden' : 'visible'}>
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={cancelColorChange}
            >
              Annulla
            </Button>
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={applyColorChange}
            >
              Applica
            </Button>
          </ButtonGroup>
        </Flex>
        <Flex
          flex={'0 0 100%'}
          marginTop={5}
          visibility={previewMode ? 'hidden' : 'visible'}
        >
          <Flex
            justifyContent={'space-evenly'}
            alignItems={'center'}
            width={'100%'}
          >
            <Text>Nuovo Colore</Text>
            <Box
              height={'50px'}
              width={'100px'}
              background={previousColor}
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '50%',
                zIndex: 1,
                background: currentColor,
              }}
            />
            <Text>Colore Attuale</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
