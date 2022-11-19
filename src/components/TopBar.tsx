import { Heading, Flex, useColorModeValue, IconButton } from "@chakra-ui/react";
import { CurrencyCircleDollar, EyeClosed, Eye } from "phosphor-react";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GetQueryTransactions } from "./../types/Item";

const GET_TRANSACTIONS_AMOUNT_QUERY = gql`
  query {
    transactions {
      amount
      cashin
    }
  }
`;

const TopBar = () => {
  const { data } = useQuery<GetQueryTransactions>(
    GET_TRANSACTIONS_AMOUNT_QUERY
  );
  const [show, setShow] = useState(false);

  var cashin = 0;
  var cashout = 0;

  data?.transactions.forEach((item) => {
    if (item.cashin) {
      return (cashin += item.amount);
    }

    if (!item.cashin) {
      return (cashout += item.amount);
    }
  });

  var total = cashin - cashout;

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
              $$ {total},00
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
