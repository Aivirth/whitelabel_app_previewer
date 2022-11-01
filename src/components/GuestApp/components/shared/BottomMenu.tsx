import {
  FaUserCog as UserIcon,
  FaGlobeAmericas as GlobeIcon,
} from "react-icons/fa";
import { AiOutlineCalendar as CalendarIcon } from "react-icons/ai";
import { BiHelpCircle as HelpIcon } from "react-icons/bi";
import { Center, Text, Stack, Flex, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IBottomMenu {}
type MenuItem = {
  Icon: IconType;
  color: string;
};

const menuItems: MenuItem[] = [
  {
    Icon: UserIcon,
    color: "#32a852",
  },
  {
    Icon: CalendarIcon,
    color: "#264e99",
  },
  {
    Icon: HelpIcon,
    color: "#ca3dcc",
  },
  {
    Icon: GlobeIcon,
    color: "#d97641",
  },
];

export default function BottomMenu({}: IBottomMenu) {
  return (
    <Box
      display={"flex"}
      justifyContent="space-evenly"
      marginTop="auto"
      marginBottom="20px"
      position={"absolute"}
      bottom="0"
      width="100%"
      paddingTop="20px"
      zIndex={"999"}
      _before={{
        position: "absolute",
        paddingTop: "-20px",
        boxShadow: "0px -2px 5px 0px rgb(100, 100, 100,  30%)",
        content: "''",
        width: "100%",
        height: "100%",
        display: "block",
        top: 0,
      }}
    >
      {menuItems.map(({ Icon, color }) => (
        <Box
          display={"inline-block"}
          height="70px"
          width="70px"
          borderRadius={"15px"}
          overflow="hidden"
        >
          <Center
            height={"100%"}
            width="100%"
            fontSize={"2rem"}
            color={color}
            bgColor={"rgba(66, 135, 245, 0.3)"}
          >
            <Icon />
          </Center>
        </Box>
      ))}
    </Box>
  );
}
