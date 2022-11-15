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
} from "@chakra-ui/react";
import { Plus, ArrowUpRight } from "phosphor-react";
import { useState } from "react";
import MoreModal from "./MoreModal";

const transactions = [
  {
    id: 1,
    name: "Leia Organa",
    exe1: "$$ 99.00",
    exe2: "$$ 99.00",
    exe3: "$$ 99.00",
    cashin: false,
    cashout: true,
  },

  {
    id: 2,
    name: "Obi-Wan Kenobi",
    exe1: "$$ 99.00",
    exe2: "$$ 99.00",
    exe3: "$$ 99.00",
    cashin: true,
    cashout: false,
  },

  {
    id: 3,
    name: "Darth Vader",
    exe1: "$$ 99.00",
    exe2: "$$ 99.00",
    exe3: "$$ 99.00",
    cashin: true,
    cashout: false,
  },

  {
    id: 4,
    name: "Han Solo",
    exe1: "$$ 99.00",
    exe2: "$$ 99.00",
    exe3: "$$ 99.00",
    cashin: false,
    cashout: true,
  },
];

const Transactions = () => {
  const [allTransactions, setAllTransactions] = useState(transactions);

  return (
    <Stack p="6">
      <Card bg={useColorModeValue("white", "gray.700")}>
        <CardHeader
          bg={useColorModeValue("gray.700", "gray.700")}
          roundedTop="8"
        >
          <Heading size="md" color={useColorModeValue("white", "white")}>
            Cash In - Cash Out
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {allTransactions.map((item) => (
              <Grid
                templateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(5, 1fr)",
                ]}
                w="full"
                key={item.id}
                alignItems="center"
                justifyContent={"space-between"}
                gap={["4"]}
                flexWrap={"wrap"}
              >
                <Flex alignItems="center" justifyContent={"start"} gap="2">
                  <WrapItem>
                    <Avatar name={item.name} size="md" />
                  </WrapItem>
                  <Heading size="xs">{item.name}</Heading>
                </Flex>

                {item.cashin && (
                  <Flex alignItems={"center"} justifyContent="center">
                    <Badge colorScheme="green" p="1">
                      Cash in
                    </Badge>
                  </Flex>
                )}

                {item.cashout && (
                  <Flex alignItems={"center"} justifyContent="center">
                    <Badge colorScheme="red" p="1">
                      Cash in
                    </Badge>
                  </Flex>
                )}

                <Box>
                  <Text fontSize="sm">Non elit</Text>
                  <Heading size="xs" textTransform="uppercase">
                    $$ 99.90
                  </Heading>
                </Box>

                <Box>
                  <Text fontSize="sm">Adipisicing</Text>
                  <Heading size="xs" textTransform="uppercase">
                    $$ 99.90
                  </Heading>
                </Box>

                <div>
                  <MoreModal name={item.name} />
                </div>
              </Grid>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default Transactions;
