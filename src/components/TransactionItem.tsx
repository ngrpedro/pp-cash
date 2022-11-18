import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import React from "react";
import {
  Grid,
  GridItem,
  Flex,
  Avatar,
  useColorModeValue,
  Text,
  Tag,
} from "@chakra-ui/react";

interface TransactionProps {
  id: string;
  obs: string;
  name: {
    name: string;
  };
  amount: number;
  cashin: boolean;
  createdAt: string;
}

const TransactionItem = (props: TransactionProps) => {
  return (
    <Grid
      key={props.id}
      templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
      alignItems="center"
      justifyContent={"start"}
      gap='3'
    >
      <GridItem>
        <Flex alignItems={"center"} justifyContent="start" gap={"2"}>
          <Avatar size="sm" />
          <Text fontSize={"md"} fontWeight="bold">
            {props.name.name}
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        {props.cashin ? (
          <Tag bg={useColorModeValue("red.200", "red.500")}>
            <Text fontSize={"md"} fontWeight="bold">
              Cash-out
            </Text>
          </Tag>
        ) : (
          <Tag bg={useColorModeValue("green.200", "green.500")}>
            <Text fontSize={"md"} fontWeight="bold">
              Cash-in
            </Text>
          </Tag>
        )}
      </GridItem>

      <GridItem>
        <Text fontSize={"md"} fontWeight="bold">
          {props.obs}
        </Text>
      </GridItem>

      {/* 
      <GridItem>
        <Text fontSize={"md"} fontWeight="bold">
          {props.createdAt}
        </Text>
      </GridItem> */}

      <GridItem>
        <Text fontSize={"md"} fontWeight="bold">
          R${props.amount}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default TransactionItem;
