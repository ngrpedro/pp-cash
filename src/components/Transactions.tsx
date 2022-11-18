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
} from "@chakra-ui/react";

import { gql, useQuery } from "@apollo/client";
import TransactionItem from "./TransactionItem";
import { GetQueryTransactions } from "../types/Item";

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
      <Card bg={useColorModeValue("white", "gray.700")}>
        <CardHeader
          bg={useColorModeValue("gray.700", "gray.700")}
          roundedTop="8"
        >
          <Flex
            direction={["column", "row", "column", "row"]}
            maxWidth={"1200px"}
            justifyContent={["start", "space-between"]}
            alignItems={["start", "center"]}
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
    </>
  );
};

export default Transactions;
