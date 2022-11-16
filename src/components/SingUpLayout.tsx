import React from "react";
import { useColorModeValue, Flex } from "@chakra-ui/react";
import ToggleColorMode from "./ToggleColorMode";
import { Box } from "@chakra-ui/react";

interface props {
  children: JSX.Element;
}
const SingUpLayout = ({ children }: props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center flex-col gap-4 h-screen">
      <Flex
        alignItems={"center"}
        justifyContent="center"
        className="md:col-span-2"
        bg={useColorModeValue("gray.100", "gray.700")}
        h="full"
      >
        <Box
          bg={useColorModeValue("black", "white")}
          className="md:col-span-2 w-[23rem] h-[22rem] rounded-full"
        ></Box>
        <Box
          className=" w-[30rem] h-[40rem] absolute"
          style={{
            transform: "translate(50%)",
            backdropFilter: "blur( 13.5px )",
            backgroundColor: "transparent",
          }}
        ></Box>
      </Flex>
      <div className="flex items-center justify-center flex-col gap-4">
        <Flex flexDirection={"column"} p={10} rounded={"8px"} gap={8}>
          {children}
        </Flex>
      </div>
    </div>
  );
};

export default SingUpLayout;
