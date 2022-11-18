import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useColorModeValue,
  Avatar,
  Text,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Grid,
  Box,
} from "@chakra-ui/react";

import ConfirmTransaction from "./ConfirmTransaction";
import { gql, useQuery, useMutation } from "@apollo/client";
import { GetQueryContacts } from "../types/Item";

const GET_CONTACTS_QUERY = gql`
  query {
    contacts {
      id
      name
    }
  }
`;

const CREATE_TRANSACTION_MUTATION = gql`
  mutation createTransaction($id: ID, $amount: Int) {
    createTransaction(
      data: { name: { connect: { Contact: { id: $id } } }, amount: $amount }
    ) {
      id
    }
  }
`;

const NewTransaction = () => {
  const { data } = useQuery<GetQueryContacts>(GET_CONTACTS_QUERY);
  const [addTransaction] = useMutation(CREATE_TRANSACTION_MUTATION);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState("");
  const [amount, setAmount] = useState(0);

  const setTransaction = () => {
    const transaction = {
      id,
      amount,
    };

    addTransaction({
      variables: {
        id,
        amount,
      },
    });
    onClose();
  };

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

      <Modal isOpen={isOpen} onClose={onClose} size={"md"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Transition</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text pb="4" fontSize={"xs"}>
              Selecione o contato e informe um valor
            </Text>
            <form className="flex flex-col gap-10">
              <div className="flex items-start justify-start gap-3 overflow-y-auto">
                {data?.contacts.map((item) => (
                  <Button
                    key={item.id}
                    h="20"
                    className="snap-center snap-always"
                    cursor={"pointer"}
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent={"center"}
                    textAlign="center"
                    gap="2"
                    onClick={(e) => setId(item.id)}
                    _hover={{
                      bg: useColorModeValue("white", "gray.800"),
                    }}
                    _active={{
                      bg: useColorModeValue("white", "gray.800"),
                    }}
                    bg="transparent"
                    rounded="6"
                    p="2"
                  >
                    <Avatar name={item.name} size={"md"} />
                    <Text fontSize="xs">{item.name}</Text>
                  </Button>
                ))}
              </div>
              <Grid
                templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                alignItems="end"
                justifyContent={"center"}
                gap="50"
              >
                <GridItem>
                  <FormControl className="md:ml-4">
                    <FormLabel>Valor</FormLabel>
                    <Input
                      pr="4.5rem"
                      type="number"
                      bg={useColorModeValue("white", "gray.800")}
                      _focusVisible={{ borderColor: "black" }}
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  {id.length > 0 && (
                    <Box>
                      <Text>Enviar para: {id}</Text>
                      <Text>
                        Valor de: {amount}
                        {/* {amount.length > 0 && "reais"} */}
                      </Text>
                    </Box>
                  )}
                </GridItem>
              </Grid>
            </form>
          </ModalBody>

          <Box p="10" w="full" float={"right"} className="space-x-4">
            <Button onClick={onClose}>Cancel</Button>
            <ConfirmTransaction setTransaction={setTransaction} />
          </Box>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NewTransaction;
