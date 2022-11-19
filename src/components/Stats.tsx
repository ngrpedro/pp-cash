import image from "../assets/finance.svg";
import {
  Flex,
  useColorModeValue,
  Box,
  Grid,
  Card,
  CardBody,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  CircularProgress,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Transactions from "./Transactions";
import {
  Plus,
  CurrencyCircleDollar,
  EyeClosed,
  Eye,
  ChartLineUp,
  AlignTop,
  WarningCircle,
  CheckSquareOffset,
  CheckCircle,
  Image,
  ArrowDown,
  ArrowUp,
} from "phosphor-react";
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

const Stats = () => {
  const { data } = useQuery<GetQueryTransactions>(
    GET_TRANSACTIONS_AMOUNT_QUERY
  );

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

  console.log(cashin, cashout);
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      p="6"
      gap="6"
    >
      <Stack gap="5">
        <Card bg={useColorModeValue("white", "gray.700")}>
          <CardBody>
            <Stat>
              <StatLabel></StatLabel>
              <StatNumber>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  R$ {cashin}.00
                  <Box color={useColorModeValue("green.600", "green.200")}>
                    <ArrowDown size={32} />
                  </Box>
                </Flex>
              </StatNumber>
              <StatHelpText>Income</StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={useColorModeValue("white", "gray.700")}>
          <CardBody>
            <Stat>
              <StatLabel></StatLabel>
              <StatNumber>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  R$ {cashout}.00
                  <Box color={useColorModeValue("red.600", "red.200")}>
                    <ArrowUp size={32} />
                  </Box>
                </Flex>
              </StatNumber>
              <StatHelpText>Expence</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </Stack>
      <Transactions />
    </Grid>
  );
};

export default Stats;
