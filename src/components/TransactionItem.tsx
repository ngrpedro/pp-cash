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
  Box,
} from "@chakra-ui/react";
import { ArrowDown, ArrowUp } from "phosphor-react";

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
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(4, 1fr)",
        "repeat(2, 1fr)",
        "repeat(4, 1fr)",
      ]}
      alignItems="center"
      justifyContent={"start"}
      gap="3"
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
          <Tag
            rounded={"full"}
            p="2"
            bg={useColorModeValue("green.200", "green.500")}
          >
            <Box color={useColorModeValue("green.600", "green.200")}>
              <ArrowDown size={22} />
            </Box>
          </Tag>
        ) : (
          <Tag
            rounded={"full"}
            p="2"
            bg={useColorModeValue("red.200", "red.500")}
          >
            <Box color={useColorModeValue("red.600", "red.200")}>
              <ArrowUp size={22} />
            </Box>
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
