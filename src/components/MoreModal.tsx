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
  IconButton,
} from "@chakra-ui/react";
import { Plus } from "phosphor-react";

interface props {
  name: String;
}

const MoreModal = ({ name }: props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <IconButton
        onClick={onOpen}
        aria-label="Search database"
        icon={<Plus size={22} />}
      />

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

export default MoreModal;
