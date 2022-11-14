import { Heading, Flex, useColorModeValue, IconButton } from "@chakra-ui/react";
import { CurrencyCircleDollar, EyeClosed, Eye } from "phosphor-react";
import { useState } from "react";

const TopBar = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      position={"sticky"}
      top="0"
      zIndex={1000}
      bg={useColorModeValue("white", "gray.700")}
      p="6"
    >
      <Flex alignItems={"center"} justifyContent={"start"} gap="10">
        <Flex alignItems={"center"} justifyContent={"start"} gap="2">
          <CurrencyCircleDollar size={32} />

          {show ? (
            <Heading as="h1" size="md" noOfLines={1} w="8rem">
              $$ 150,26
            </Heading>
          ) : (
            <Heading as="h1" size="md" noOfLines={1} w="8rem">
              $$ ***,**
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
  );
};

export default TopBar;
