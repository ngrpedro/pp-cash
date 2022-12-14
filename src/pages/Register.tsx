import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowLeft, Eye, EyeClosed } from "phosphor-react";
import { Link } from "react-router-dom";
import SingUpLayout from "../components/SingUpLayout";
import ToggleColorMode from "../components/ToggleColorMode";

const Register = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <SingUpLayout>
      <>
        <Link to="/">
          <ArrowLeft size={22} />
        </Link>
        <Flex alignItems={"center"} justifyContent="space-between">
          <h1 className="text-3xl font-bold ">Hi, there</h1>
          <ToggleColorMode />
        </Flex>

        <Flex flexDirection={"column"} gap={5}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              pr="4.5rem"
              type="text"
              _focusVisible={{ borderColor: "black" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                _focusVisible={{ borderColor: "black" }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <Eye size={24} /> : <EyeClosed size={24} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button onClick={onOpen}>Register</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>We got it</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lets continue from here!
                <br />
                We are registing you, just a second
              </ModalBody>

              <ModalFooter>
                <Link to="/Dashboard">
                  <Button variant="ghost">Get started</Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </>
    </SingUpLayout>
  );
};

export default Register;
