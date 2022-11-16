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
      {/* Cards */}
      <div>
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap="4"
        >
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

          <GridItem colSpan={[2, 2, 1, 2]} rowSpan={2}>
            <Card bg={useColorModeValue("blue.700", "gray.500")} h={["full"]}>
              <CardBody>
                <Flex
                  alignItems={"center"}
                  justifyContent="center"
                  gap="5"
                  flexDirection={["row", "row", "column", "row"]}
                  color={useColorModeValue("white", "white")}
                >
                  <Heading fontSize={["lg", "2xl", "lg", "3xl"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elitv
                    ipsum dolor
                  </Heading>
                  <img src={image} alt="" className="w-40" />
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
