import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BsClipboardData } from "react-icons/bs";
import Summary from "../Summary/Summary";

interface ISummaryModalBtnProps {
  navSize: string;
}

function SummaryModalBtn({ navSize }: ISummaryModalBtnProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex padding="20px 10px" justifyContent={"center"}>
        <Button
          alignItems={"center"}
          display="flex"
          colorScheme="teal"
          variant="outline"
          onClick={onOpen}
        >
          <Text mr={5} display={navSize == "small" ? "none" : "flex"}>
            Riepilogo
          </Text>
          <Icon as={BsClipboardData} fontSize={"xl"} color={"teal"} />
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Riepilogo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Summary />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SummaryModalBtn;
