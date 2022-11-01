import React, { useCallback, useEffect, useState, useMemo } from "react";

import { useMediaQuery, useTheme, Slider } from "@chakra-ui/react";

import Item from "./Item";
import Track from "./Track";

type Props = {
  children: Array<React.ReactFragment> | Array<React.ReactChild>;
  gap: number;
};

type ItemProps = {
  setTrackIsActive: Function;
  setActiveItem: Function;
  trackIsActive: boolean;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  gap: number;
};

type sliderProps = {
  setTrackIsActive: Function;
  setActiveItem: Function;
  initSliderWidth: Function;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  gap: number;
};

type trackProps = {
  setTrackIsActive: Function;
  setActiveItem: Function;
  trackIsActive: boolean;
  sliderWidth: Function;
  activeItem: number;
  constraint: number;
  multiplier: number;
  itemWidth: number;
  positions: number[];
  gap: number;
};

const ChakraCarousel = ({ children, gap }: Props) => {
  const [trackIsActive, setTrackIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(0.35);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const initSliderWidth = useCallback((width : number) => setSliderWidth(width), []);

  const positions = useMemo(
    () =>
      children.map(
        (_: any, index: number) => -Math.abs((itemWidth + gap) * index)
      ),
    [children, itemWidth, gap]
  );

  const { breakpoints } = useTheme();
  const [isBetweenBaseAndMd] = useMediaQuery(
    `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
  );
  const [isBetweenMdAndXl] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
  );
  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setItemWidth(sliderWidth - gap);
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndXl) {
      setItemWidth(sliderWidth / 2 - gap);
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setItemWidth(sliderWidth / 3 - gap);
      setMultiplier(0.35);
      setConstraint(3);
    }
  }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

  const sliderProps = {
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
  };

  const trackProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    sliderWidth,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    gap,
  };

  const itemProps: ItemProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap,
  };

  console.log({ trackProps });
  console.log({ sliderProps });

  return (
    <Slider {...sliderProps}>
      <Track {...trackProps}>
        {children.map((child: any, index: React.Key | null | undefined) => (
          <Item {...itemProps} index={index} key={index}>
            {child}
          </Item>
        ))}
      </Track>
    </Slider>
  );
};

export default ChakraCarousel;
