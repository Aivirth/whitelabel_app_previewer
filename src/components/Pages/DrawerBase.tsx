import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../../state/reducers/index";
import * as optionsModalActionCreator from "../../state/action_creators/optionsModalCreator";

interface IDrawerBaseProps {
  children?: React.ReactNode;
}

export default function DrawerBase({ children }: IDrawerBaseProps) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: State) => state.optionsModal.isOpen);

  const updateDrawerStatus = bindActionCreators(
    optionsModalActionCreator,
    dispatch
  );

  const handleDrawerClose = () => {
    updateDrawerStatus.closeOptionsModal();
  };

  return (
    <Drawer
      isOpen={isModalOpen}
      placement="right"
      onClose={handleDrawerClose}
      size={"md"}
      closeOnOverlayClick={true}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader></DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        <DrawerFooter>
          <Button variant="outline" onClick={handleDrawerClose}>
            Chiudi
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
