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
  useColorModeValue,
} from "@chakra-ui/react";
import { Eye, EyeClosed } from "phosphor-react";
import { Link } from "react-router-dom";
import SingUpLayout from "../components/SingUpLayout";

interface LoginProps {}

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <SingUpLayout>
      <>
        <h1 className="text-3xl font-bold ">Hi, there</h1>
        <Flex flexDirection={"column"} gap={5}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              pr="4.5rem"
              type="text"
              bg={useColorModeValue("gray.100", "gray.500")}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                bg={useColorModeValue("gray.100", "gray.500")}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <Eye size={24} /> : <EyeClosed size={24} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Flex gap="1" alignItems={"center"} justifyContent={"start"}>
            <Text fontSize="sm">Don't have account?</Text>
            <Link to="/Register">
              <strong>Register now!</strong>
            </Link>
          </Flex>
          <Link to="/Dashboard">
            <Button className="w-full" colorScheme="blue">
              Login
            </Button>
          </Link>
        </Flex>
      </>
    </SingUpLayout>
  );
};

export default Login;
