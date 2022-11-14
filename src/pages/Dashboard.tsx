import React from "react";
import SideBar from "../components/SideBar";
import {
  Flex,
  useColorModeValue,
  Heading,
  IconButton,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";
import { CurrencyCircleDollar, EyeClosed, Eye } from "phosphor-react";
import { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <SideBar>
        <Flex bg={useColorModeValue("white", "gray.700")} p="6">
          <Flex alignItems={"center"} justifyContent={"start"} gap="10">
            <Flex alignItems={"center"} justifyContent={"start"} gap="2">
              <CurrencyCircleDollar size={32} />

              {show ? (
                <Heading as="h1" size="md" noOfLines={1} w="8rem">
                  R$ 150,26
                </Heading>
              ) : (
                <Heading as="h1" size="md" noOfLines={1} w="8rem">
                  R$ ***,**
                </Heading>
              )}
            </Flex>

            <div>
              {show ? (
                <IconButton
                  aria-label="show"
                  onClick={() => {
                    setShow(!show);
                  }}
                  icon={<Eye size={22} />}
                />
              ) : (
                <IconButton
                  aria-label="show"
                  onClick={() => {
                    setShow(!show);
                  }}
                  icon={<EyeClosed size={22} />}
                />
              )}
            </div>
          </Flex>
        </Flex>
        <Box p="6">
          <Stack>
            <Heading>Dashboard</Heading>
            <Text>Good to see you here</Text>
          </Stack>
        </Box>
      </SideBar>
    </div>
  );
};

export default Dashboard;
