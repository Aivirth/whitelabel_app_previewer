import { Flex } from "@chakra-ui/react";
import { useState } from "react";

//TODO: Add proper ts types
type Props = {
  setTrackIsActive: any;
  setActiveItem: any;
  activeItem: any;
  constraint: any;
  itemWidth: any;
  positions: any;
  children: any;
  index: any;
  gap: any;
};

const Item = ({
  setTrackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  index,
  gap,
}: Props) => {
  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = () => setTrackIsActive(true);

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event: any) =>
    event.key === "Tab" &&
    !(activeItem === positions.length - constraint) &&
    setActiveItem(index);

  const handleKeyDown = (event: any) =>
    event.key === "Tab" && setUserDidTab(true);

  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`,
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
};

export default Item;
