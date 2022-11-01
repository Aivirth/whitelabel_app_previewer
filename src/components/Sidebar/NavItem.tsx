import {
  Flex,
  Icon,
  Link as ChakraLink,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink, useMatch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as optionsModalActionCreator from "../../state/action_creators/optionsModalCreator";

interface INavItemProps {
  navSize: string;
  icon: IconType;
  title: string;
  active?: boolean;
  uri: string;
}

const NavItem = ({ navSize, icon, title, uri }: INavItemProps) => {
  const isActive = useMatch(uri);
  const active = isActive ? true : false;

  const dispatch = useDispatch();

  const updateDrawerStatus = bindActionCreators(
    optionsModalActionCreator,
    dispatch
  );

  const handleDrawerStatus = () => {
    updateDrawerStatus.toggleOptionsModal();
  };

  return (
    <Flex
      mt={30}
      flexDir={"column"}
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <ChakraLink
          display={"block"}
          backgroundColor={active ? 'brand.main' : "transparent"}
          p={3}
          color="gray.500"
          _hover={{
            textDecor: "none",
            backgroundColor: 'brand.main',
            color: "#fff",
          }}
          w={navSize == "large" ? "100%" : "auto"}
          as={NavLink}
          to={uri}
          onClick={handleDrawerStatus}
        >
          <MenuButton width={"100%"}>
            <Flex
              alignItems={"center"}
              color={active ? "#FFFFFF" : "inherit"}
              position="relative"
            >
              <Icon as={icon} fontSize={"xl"} />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </ChakraLink>
      </Menu>
    </Flex>
  );
};

export default NavItem;
