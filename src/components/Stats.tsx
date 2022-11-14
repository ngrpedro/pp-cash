import SideBar from "../components/SideBar";
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
  CircularProgressLabel,
} from "@chakra-ui/react";
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
} from "phosphor-react";
import { useState } from "react";
import Transactions from "../components/Transactions";

const Stats = () => {
  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} p="6" gap="6">
      {/* Cards */}
      <div>
        <Grid templateColumns={"repeat(2, 1fr)"} gap="4">
          <Card bg={useColorModeValue("white", "gray.700")}>
            <CardBody>
              <Stat>
                <StatLabel></StatLabel>
                <StatNumber>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    R$ 0.00
                    <Box color={useColorModeValue("green.600", "green.200")}>
                      <ChartLineUp size={32} />
                    </Box>
                  </Flex>
                </StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
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
                    <Box>
                      <CheckSquareOffset size={32} />
                    </Box>
                  </Flex>
                </StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
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
                    <Box>
                      <AlignTop size={32} />
                    </Box>
                  </Flex>
                </StatNumber>
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
                    <Box color={useColorModeValue("yellow.600", "yellow.200")}>
                      <WarningCircle size={32} />
                    </Box>
                  </Flex>
                </StatNumber>
              </Stat>
            </CardBody>
          </Card>

          <GridItem colSpan={2}>
            <Card bg={useColorModeValue("white", "gray.700")}>
              <CardBody>
                <Flex alignItems={"center"} justifyContent="center">
                  <Stat>
                    <StatLabel></StatLabel>
                    <StatHelpText>
                      Pariatur qui aute sint minim nisi.
                    </StatHelpText>
                    <StatNumber>
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        65.000 / 22.568
                      </Flex>
                    </StatNumber>
                  </Stat>
                  <Box>
                    <CircularProgress value={40} color="gray.600" size="68px">
                      <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>

      <Card bg={useColorModeValue("white", "gray.700")} h={"20rem"}>
        <CardBody>
          <Flex h="full" alignItems={"center"} justifyContent="center">
            <Image size={32} />
          </Flex>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default Stats;
