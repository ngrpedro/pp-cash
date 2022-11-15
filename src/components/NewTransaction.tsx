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
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

interface props {
  name?: String;
}

const NewTransaction = ({ name = "Pedro Nogueira" }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        bg={useColorModeValue("black", "white")}
        _hover={{
          bg: useColorModeValue("gray.600", "gray.200"),
        }}
      >
        New transaction
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{name}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NewTransaction;
