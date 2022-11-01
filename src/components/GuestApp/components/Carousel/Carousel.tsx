import React from "react";
import { Box, IconButton, useBreakpointValue, Flex } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {
  FaChevronLeft as LeftBtnIcon,
  FaChevronRight as RightBtnIcon,
} from "react-icons/fa";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0px",
  // centerMode: true,
};

type Props = { children: React.ReactNode };

export default function Carousel({ children }: Props) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const slideControls = (
    <Flex
      width={"100%"}
      //  background="#171c26"
    >
      <IconButton
        aria-label="left-arrow"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        color={"gray.700"}
        borderRadius="0"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        height="60px"
        fontSize={"30px"}
        width="100%"
      >
        <LeftBtnIcon />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        color={"gray.700"}
        borderRadius="0"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        // position="absolute"
        // right={side}
        // top={top}
        // transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        // width="60px"
        height="60px"
        fontSize={"30px"}
        width="100%"
      >
        <RightBtnIcon />
      </IconButton>
    </Flex>
  );

  return (
    <Box position={"relative"}>
      <Box
        position={"relative"}
        overflow={"hidden"}
        height="740px"
        width="360px"
      >
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {children}
        </Slider>
      </Box>
      {slideControls}
    </Box>
  );
}
