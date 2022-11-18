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

const Stats = () => {
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
                  R$ 0.00
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
                  R$ 0.00
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
