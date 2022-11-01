import { Box, Center, CSSObject, Flex, Text, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { State } from '../../../../state/reducers'
import { IcolorsState } from '../../../../state/reducers/colorsReducer.d'
import { IconType } from 'react-icons'
import {
//   BsFillPersonFill as ProfileIcon,
  BsCalendar2DateFill as TravelIcon,
} from 'react-icons/bs'
// import { VscKey as KeyIcon } from 'react-icons/vsc'
// import KeyIcon from '../../../../assets/icons/key_white.svg'
import {ReactComponent as KeyIcon }from '../../../../assets/icons/key_white.svg'
import {ReactComponent as HelpIcon} from '../../../../assets/icons/phone-ringing.svg'
import {ReactComponent as TripIcon} from '../../../../assets/icons/calendar-trip.svg'
import {ReactComponent as ProfileIcon} from '../../../../assets/icons/profile.svg'
import {ReactComponent as ExploreIcon} from '../../../../assets/icons/globe.svg'
// import { FaGlobeAmericas as ExploreIcon } from 'react-icons/fa'
import { CgPhone as PhoneIcon } from 'react-icons/cg'
import SvgIcon from './SvgIcon'

type Props = {}
interface IMenuItemProps {
//   Icon: IconType | string | React.FunctionComponent<
//   React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  Icon: React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string | undefined }
>
  name: string
  cutOff?: boolean
  left?: boolean
  brandColors: IcolorsState
  isTabActive?: boolean
}

interface IKeyItemProps {
  brandColors: IcolorsState
}

const MenuItem = ({
  Icon,
  name,
  cutOff,
  left,
  brandColors,
  isTabActive = false,
}: IMenuItemProps) => {
  let beforeEl: CSSObject | undefined = undefined
  let afterEl: CSSObject | undefined = undefined

  beforeEl = {
    boxShadow: '0px -5px 5px 0px rgb(100, 100, 100,  50%)',
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-2',
  }

  const afterElBaseProperties: CSSObject | undefined = {
    content: '""',
    position: 'absolute',
    bottom: 0,
    background: 'transparent',
    zIndex: '1',
    width: '100%',
    height: '100%',
    marginBottom: '0px',
    marginRight: '0px',
    boxShadow: '-15px 50px 0 15px #fff',
  }

  if (cutOff && left) {
    beforeEl = { ...beforeEl, borderTopRightRadius: '50%' }
    afterEl = {
      ...afterElBaseProperties,
      right: 0,
      borderBottomLeftRadius: '50%',
      transform: 'translateX(100%)',
    }
  }

  if (cutOff && !left) {
    beforeEl = { ...beforeEl, borderTopLeftRadius: '50%' }
    afterEl = {
      ...afterElBaseProperties,
      left: 0,
      borderBottomRightRadius: '50%',
      transform: 'translateX(-100%)',
    }
  }

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      flexGrow={1}
      flexDir={'column'}
      maxWidth={'20%'}
      background={'white'}
      paddingBottom={'10px'}
      paddingTop={'20px'}
      _before={beforeEl}
      _after={afterEl}
      position={'relative'}
      borderTopRightRadius={cutOff && left ? '50%' : undefined}
      borderTopLeftRadius={cutOff && !left ? '50%' : undefined}
      color={'#8e8f8e'}
    >
      <Center
        margin="auto"
        marginBottom={'5px'}
        fontSize={'1.9rem'}
        position={'relative'}
        zIndex={'10'}
        height={'30px'}
        width={'30px'}
      >
        {/* {typeof Icon === 'string' ? <Image src={Icon} /> : <Icon />} */}

        <SvgIcon Icon={Icon} size={'28px'} fill={isTabActive ? brandColors.secondary.hex : '#8e8f8e'}/>
      </Center>
      <Text
        position={'relative'}
        zIndex={'10'}
        as={'span'}
        color={isTabActive ? brandColors.primary.hex : '#8e8f8e'}
      >
        {name}
      </Text>
    </Flex>
  )
}

const KeyItem = ({ brandColors }: IKeyItemProps) => {
  const keybgColor = brandColors.primary.hex
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      flexGrow={1}
      flexDir={'column'}
      maxWidth={'20%'}
      transform={'translateY(-5px)'}
      //   visibility='hidden'
    >
      <Center
        paddingX={'15px'}
        margin="auto"
        borderRadius={'50%'}
        background={keybgColor}
        height={'55px'}
        width={'55px'}
        boxShadow={'0px 5px 5px 10px rgb(100 100 100 / 20%)'}
        fontSize={'5rem'}
        color={'white'}
      >
        <KeyIcon stroke='#ffffff' />
        {/* <Image src={KeyIcon} /> */}
      </Center>
    </Flex>
  )
}

export default function Tabsbar({}: Props) {
  const brandColors = useSelector((state: State) => state.colors)
  return (
    <Flex position="absolute" bottom="0" left="0" width="100%">
      <Flex
        justifyContent={'space-around'}
        flexGrow={1}
        flexDir={'row'}
        justifyItems={'flex-end'}
        paddingBottom={'20px'}
        // marginBottom={"30px"}
      >
        <MenuItem
          Icon={ProfileIcon}
          name={'Profilo'}
          brandColors={brandColors}
        />
        <MenuItem
          Icon={TripIcon}
          name={'Viaggi'}
          cutOff={true}
          left={true}
          brandColors={brandColors}
          isTabActive={true}
        />
        <KeyItem brandColors={brandColors} />
        <MenuItem
          Icon={ExploreIcon}
          name={'Esplora'}
          cutOff={true}
          left={false}
          brandColors={brandColors}
        />
        <MenuItem Icon={HelpIcon} name={'Help'} brandColors={brandColors} />
      </Flex>
    </Flex>
  )
}
