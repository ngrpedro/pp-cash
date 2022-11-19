import {
  Flex,
  useColorModeValue,
  Heading,
  Stack,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  RadioGroup,
  Radio,
  Select,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import TransactionItem from "./TransactionItem";
import { GetQueryTransactions } from "../types/Item";
import Incomes from "./TransitionTabs/Incomes";
import Expenses from "./TransitionTabs/Expenses";

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
  const { data } = useQuery<GetQueryTransactions>(GET_TRANSACTIONS_QUERY);

  return (
    <>
      <Tabs>
        <TabList
          roundedTop={"8px"}
          bg={useColorModeValue("gray.300", "gray.700")}
          color={useColorModeValue("black", "white")}
          _selected={{
            fontWeight: "bold",
          }}
        >
          <Tab>Todas</Tab>
          <Tab>Entradas</Tab>
          <Tab>Saídas</Tab>
        </TabList>

        <TabPanels
          roundedBottom={"8px"}
          bg={useColorModeValue("white", "gray.700")}
          color={useColorModeValue("black", "white")}
        >
          <TabPanel>
            <Stack divider={<StackDivider />} spacing="4">
              {data?.transactions.map((item) => (
                <TransactionItem key={item.id} {...item} />
              ))}
            </Stack>
          </TabPanel>
          <TabPanel>
            <Incomes />
          </TabPanel>
          <TabPanel>
            <Expenses />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Transactions;
