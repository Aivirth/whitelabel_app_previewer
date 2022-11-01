import { Color, IcolorsState } from '../../../state/reducers/colorsReducer.d'
import Topbar from '../components/shared/Topbar'
import Tabsbar from '../components/shared/Tabsbar'
import { Flex, Box, Text, Image, Circle } from '@chakra-ui/react'
import { IroomState } from '../../../state/reducers/roomReducer'
// import { AiOutlineHome as HomeIcon } from 'react-icons/ai'
// import { BsFillPinMapFill as MapIcon } from 'react-icons/bs'
import {ReactComponent as MapIcon} from '../../../assets/icons/address.svg'
import {ReactComponent as HomeIcon} from '../../../assets/icons/home.svg'
import BottomMenu from '../components/shared/BottomMenu'

type IRoomProps = {
  brandColors: IcolorsState
  data: IroomState
}

type IRoomDetails = {
  borderColor: Color
  openMapColor: Color
  roomAddress: string
  detailsHeadingColor : Color
}

const RoomDetails = ({
  borderColor,
  openMapColor,
  roomAddress,
  detailsHeadingColor
}: IRoomDetails) => {
  return (
    <Box
      border={`2px solid ${borderColor.hex}`}
      borderRadius="2rem"
      padding={'20px'}
    >
      <Flex alignItems={'center'} marginBottom={'10px'}>
        <Box fontSize={'2xl'} marginRight={'15px'}>
          <HomeIcon width={'25px'} />
        </Box>
        <Text
          textTransform={'uppercase'}
          fontWeight={'bold'}
          fontSize={'0.9em'}
          color={detailsHeadingColor.hex}
        >
          Dettagli della struttura
        </Text>
      </Flex>
      <Flex alignItems={'center'}>
        <Box fontSize={'2xl'} marginRight={'20px'}>
          <MapIcon width={'25px'}/>
        </Box>
        <Text>{roomAddress}</Text>
        <Text
          fontWeight={'bold'}
          color={openMapColor.hex}
          textAlign={'center'}
          marginLeft={'15px'}
        >
          Apri Mappa
        </Text>
      </Flex>
    </Box>
  )
}

export default function Room({ brandColors, data }: IRoomProps) {
  const {
    primary: colorPrimary,
    primary_darkmode: colorPrimaryDarkMode,
    secondary: colorSecondary,
    secondary_darkmode: colorSecondaryDarkMode,
    tertiary: colorTertiary,
    quaternary: colorQuaternary,
  } = brandColors

  const { roomName, roomAddr, roomDesc, roomImage } = data
  return (
    <Flex flexDir={'column'} position="relative" height={'100%'}>
      <Topbar title={'Struttura'} />
      <Flex  flexDir={'column'}>
        <Image src={roomImage} />
        <Box marginTop={3} textAlign='center'>
            <Circle size={'15px'} display={'inline-block'} bg={'gray.300'}marginRight={'10px'}/>
            <Circle size={'15px'} display={'inline-block'} bg={'gray.600'}/>
        </Box>

      </Flex>
      <Box paddingX={4}>
        <Box
          paddingTop={2}
          borderBottom={`2px solid ${colorQuaternary.hex}`}
          marginBottom={'10px'}
          paddingBottom={'10px'}
        >
          <Text as={'p'} fontWeight={'bold'} mb={1}>
            {roomName}
          </Text>
          <Text as={'p'}color={'gray.500'}>{roomDesc}</Text>
        </Box>
      </Box>
      <Box paddingX={4}>
        <RoomDetails
          roomAddress={roomAddr}
          borderColor={colorSecondary}
          openMapColor={colorSecondary}
          detailsHeadingColor={colorPrimary}
        />
      </Box>
      <BottomMenu />
    </Flex>
  )
}
