import {
  Box,
  Button,
  Collapse,
  Fade,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ShieldWarning } from "phosphor-react";

interface ConfirmProps {
  setTransaction: () => void;
}

const ConfirmTransaction = ({ setTransaction }: ConfirmProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        onClick={onToggle}
        bg={useColorModeValue("green.600", "green.600")}
        color={useColorModeValue("white", "black")}
        _hover={{
          bg: useColorModeValue("green.500", "green.700"),
          color: useColorModeValue("black", "white"),
        }}
        _active={{
          bg: useColorModeValue("green.500", "green.700"),
          color: useColorModeValue("black", "white"),
        }}
      >
        Save
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          p="4"
          m="4"
          direction={"column"}
          gap="2"
          alignItems={"center"}
          justifyContent="center"
          color="red"
          bg={useColorModeValue("white", "gray.800")}
          rounded="md"
          border={"1px"}
          borderColor="red"
        >
          <Heading fontSize={"xl"}>Are you sure?</Heading>

          <Box>
            <ShieldWarning size={32} />
          </Box>

          <Button
            onClick={setTransaction}
            bg={useColorModeValue("red.200", "red.800")}
            color={useColorModeValue("black", "white")}
            _hover={{
              bg: useColorModeValue("red.100", "red.700"),
              color: useColorModeValue("black", "white"),
            }}
            _active={{
              bg: useColorModeValue("red.100", "red.700"),
              color: useColorModeValue("black", "white"),
            }}
          >
            Confirm Transition
          </Button>
        </Flex>
      </Collapse>
    </>
  );
};

export default ConfirmTransaction;
