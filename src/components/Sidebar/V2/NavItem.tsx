import {
  Box,
  Flex,
  Icon,
  keyframes,
  Link as ChakraLink,
  Menu,
  MenuButton,
  Text,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { NavLink, useMatch } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as optionsModalActionCreator from '../../../state/action_creators/optionsModalCreator'

interface INavItemProps {
  navSize: string
  icon: IconType
  title: string
  active?: boolean
  uri: string
}

const animationKeyframes = keyframes`
  0% { transform: translateX(-100%); opacity: 0;  }
  38% {opacity: 0;}
  100% { transform: translateX(0%); opacity: 1;  }
`
const animation = `${animationKeyframes} 0.5s ease forwards`

const NavItem = ({ navSize, icon, title, uri }: INavItemProps) => {
  const isActive = useMatch(uri)
  const active = isActive ? true : false

  const dispatch = useDispatch()

  const updateDrawerStatus = bindActionCreators(
    optionsModalActionCreator,
    dispatch,
  )

  const handleDrawerStatus = () => {
    updateDrawerStatus.toggleOptionsModal()
  }

  return (
    <Flex
      mt={5}
      flexDir={'column'}
      w="100%"
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <ChakraLink
        display={'flex'}
        backgroundColor={active ? 'brand.main' : 'transparent'}
        p={3}
        _hover={{
          textDecor: 'none',
          backgroundColor: 'brand.main',
          color: '#fff',
        }}
        w={navSize === 'large' ? '100%' : 'auto'}
        as={NavLink}
        to={uri}
        onClick={handleDrawerStatus}
        alignItems={'center'}
        color={active ? '#FFFFFF' : 'gray.500'}
        position="relative"
        marginBottom="1.1rem"
        transition="0.5s ease"
      >
        <Icon as={icon} fontSize={'xl'} />
        <Text
          ml={5}
          display={navSize === 'small' ? 'none' : 'block'}
          opacity={navSize === 'small' ? 0 : 1}
          whiteSpace={'nowrap'}
          as={motion.p}
          animation={navSize === 'large' ? animation : undefined}
        >
          {title}
        </Text>
      </ChakraLink>
      {/* <Menu placement="right">
      </Menu> */}
    </Flex>
  )
}

export default NavItem
