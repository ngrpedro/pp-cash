import React from "react";
import SideBar from "../components/SideBar";
import { Flex, useColorModeValue, Heading, IconButton } from "@chakra-ui/react";
import { CurrencyCircleDollar, EyeClosed, Eye } from "phosphor-react";
import { useState } from "react";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <SideBar>
        <Flex bg={useColorModeValue("white", "gray.700")} p="6">
          <Flex alignItems={"center"} justifyContent={"start"} gap="2">
            <CurrencyCircleDollar size={32} />
            <Heading as="h1" size="md" noOfLines={1}>
              R$ 150,26
            </Heading>
            <div>
              {show ? (
                <IconButton
                  aria-label="show"
                  onClick={() => {
                    setShow(!show);
                  }}
                  icon={<Eye size={32} />}
                />
              ) : (
                <IconButton
                  aria-label="show"
                  onClick={() => {
                    setShow(!show);
                  }}
                  icon={<EyeClosed size={32} />}
                />
              )}
            </div>
          </Flex>
        </Flex>
      </SideBar>
    </div>
  );
};

export default Dashboard;
