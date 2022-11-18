import {
  Flex,
  useColorModeValue,
  Heading,
  IconButton,
  Box,
  Text,
  Stack,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  WrapItem,
  Avatar,
  Grid,
  Badge,
  RadioGroup,
  Radio,
  GridItem,
  Tag,
} from "@chakra-ui/react";

import { Plus, ArrowUpRight } from "phosphor-react";
import { useState } from "react";
import { items } from "../data/items";
import { Item } from "../types/Item";
import MoreModal from "./MoreModal";
import ptBR from "date-fns/locale/pt-BR";
import { gql, useQuery } from "@apollo/client";
import TransactionItem from "./TransactionItem";

interface GetQueryTransactions {
  transactions: {
    id: string;
    obs: string;
    name: {
      name: string;
    };
    amount: number;
    cashin: boolean;
    createdAt: string;
  }[];
}

const GET_TRANSACTIONS_QUERY = gql`
  query {
    transactions {
      id
      obs
      name {
        ... on Contact {
          name
        }
      }
      amount
      cashin
      createdAt
    }
  }
`;

const Transactions = () => {
  /* const [list, setList] = useState(items); */

  const { data } = useQuery<GetQueryTransactions>(GET_TRANSACTIONS_QUERY);

  console.log(data);

  return (
    <Stack p="6">
      <Card bg={useColorModeValue("white", "gray.700")}>
        <CardHeader
          bg={useColorModeValue("gray.700", "gray.700")}
          roundedTop="8"
        >
          <Flex
            maxWidth={"1200px"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Heading size="md" color={useColorModeValue("white", "white")}>
              Cash In - Cash Out
            </Heading>

            <RadioGroup
              defaultValue="2"
              color={useColorModeValue("white", "white")}
            >
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="1">
                  Radio
                </Radio>
                <Radio colorScheme="green" value="2">
                  Radio
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {data?.transactions.map((item) => (
              <TransactionItem key={item.id} {...item} />
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default Transactions;
