import { useState } from "react";
import {
  Flex,
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
  Radio,
  RadioGroup,
  Stack,
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
  mutation createTransaction(
    $id: ID
    $amount: Int
    $cashin: Boolean
    $obs: String
  ) {
    createTransaction(
      data: {
        name: { connect: { Contact: { id: $id } } }
        amount: $amount
        cashin: $cashin
        obs: $obs
      }
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
  const [cashin, setCashin] = useState(false);
  const [obs, setObs] = useState("");

  const setTransaction = () => {
    addTransaction({
      variables: {
        id,
        amount,
        cashin,
        obs,
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
            <Flex gap="5" mb="10px">
              <Button
                bg={
                  cashin
                    ? useColorModeValue("gray.300", "gray.500")
                    : useColorModeValue("gray.500", "gray.500")
                }
                onClick={() => setCashin(false)}
              >
                Enviado
              </Button>

              <Button
                bg={
                  cashin
                    ? useColorModeValue("gray.500", "gray.500")
                    : useColorModeValue("gray.300", "gray.500")
                }
                onClick={() => setCashin(true)}
              >
                Recebido
              </Button>
            </Flex>
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
                templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]}
                alignItems="end"
                justifyContent={"center"}
                gap="50"
              >
                <GridItem>
                  <FormControl>
                    <FormLabel>Valor</FormLabel>
                    <Input
                      pr="4.5rem"
                      type="number"
                      bg={useColorModeValue("white", "gray.800")}
                      _focusVisible={{ borderColor: "black" }}
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Observação</FormLabel>
                    <Input
                      pr="4.5rem"
                      type="text"
                      bg={useColorModeValue("white", "gray.800")}
                      _focusVisible={{ borderColor: "black" }}
                      onChange={(e) => setObs(e.target.value)}
                    />
                  </FormControl>
                </GridItem>
                <GridItem className="space-y-5">
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
