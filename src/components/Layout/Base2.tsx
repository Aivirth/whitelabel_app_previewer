import {
  Flex,
  Spacer,
  Text,
  Box,
  Center,
  Square,
  Button,
  ButtonGroup,
  Image,
  Heading,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { ReactChild } from 'react'
import Sidebar from '../Sidebar/V2/Sidebar'
import DrawerBase from '../Pages/DrawerBase'

import { Routes, Route } from 'react-router-dom'
import PageBrand from '../Pages/Brand'
import Colori from '../Pages/Colori'
import GuestAppPreview from '../GuestApp/GuestAppPreview'
import LoginPin from '../Pages/LoginPin'
import PreviewCamera from '../Pages/PreviewCamera'
import Home from '../Pages/Home'
import PreviewConcierge from '../Pages/PreviewConcierge'

export interface IBaseProps {
  children?: ReactChild
}

const drawerPages = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/colors" element={<Colori />} />
    <Route path="/brand" element={<PageBrand />} />
    <Route path="/preview-room" element={<PreviewCamera />} />
    <Route path="/login-and-pin" element={<LoginPin />} />
    <Route path="/preview-concierge" element={<PreviewConcierge />} />
  </Routes>
)
export default function Base(props: IBaseProps) {
  return (
    <Grid
      templateColumns="minmax(200px, 1fr) repeat(7, 1fr)"
      templateRows={'repeat(10, 1fr)'}
      minHeight="100vh"
    >
      <GridItem
          bg="blue.500"
        rowStart={1}
        rowEnd={-1}
      >
        <Box
          // bg="blue.500"
          width={'200px'}
          position="relative"
          height="100%"
        >
          <Sidebar />
        </Box>
      </GridItem>

      <GridItem
        // bg="gray.300"
        bg={'white'}
        colStart={3}
        colEnd={7}
        rowStart={1}
        rowEnd={-1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
        borderWidth={'1px'}
        alignSelf="center"
        justifySelf={'center'}
      >
        <GuestAppPreview />
      </GridItem>
      <DrawerBase>{drawerPages}</DrawerBase>
    </Grid>
  )
}
