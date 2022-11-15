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
  Avatar,
  Flex,
  WrapItem,
  Stack,
  Text,
} from "@chakra-ui/react";

const contacts = [
  { id: 1, name: "Leia Organa" },
  { id: 2, name: "Obi-Wan Kenobi" },
  { id: 3, name: "Leia Organa" },
  { id: 4, name: "Han Solo" },
  { id: 5, name: "Leia Organa" },
];

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

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Transition</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex items-start justify-center gap-8 overflow-y-auto ">
              {contacts.map((item) => (
                <Flex
                  key={item.id}
                  flexDirection={"column"}
                  alignItems="center"
                  justifyContent={"center"}
                  textAlign="center"
                  gap="2"
                >
                  <Avatar name={item.name} size={"lg"} />
                  <Text fontSize="xs">{item.name}</Text>
                </Flex>
              ))}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NewTransaction;
