import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GetQueryTransactions } from "../../types/Item";
import { useState } from "react";
import { Stack, StackDivider } from "@chakra-ui/react";
import TransactionItem from "../TransactionItem";

const GET_TRANSACTIONS_QUERY = gql`
  query transactions($cashin: Boolean) {
    transactions(where: { cashin: $cashin }) {
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

const Expenses = () => {
  const [cashin, setCashin] = useState(false);

  const { data } = useQuery<GetQueryTransactions>(GET_TRANSACTIONS_QUERY, {
    variables: {
      cashin,
    },
  });
  return (
    <>
      <Stack divider={<StackDivider />} spacing="4">
        {data?.transactions.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </Stack>
    </>
  );
};

export default Expenses;
