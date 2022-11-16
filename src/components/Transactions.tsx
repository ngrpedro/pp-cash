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
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { Plus, ArrowUpRight } from "phosphor-react";
import { useState } from "react";
import { items } from "../data/items";
import { Item } from "../types/Item";
import MoreModal from "./MoreModal";

const Transactions = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  const [chash, setCash] = useState("");
  return (
    <Stack p="6">
      <Card bg={useColorModeValue("white", "gray.700")}>
        <CardHeader
          bg={useColorModeValue("gray.700", "gray.700")}
          roundedTop="8"
        >
          <Flex
            maxWidth={"1200px"}
            justifyContent="space-between"
            alignItems={"center"}
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
            {list.map((item, index) => (
              <Grid
                templateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(5, 1fr)",
                ]}
                w="full"
                key={index}
                alignItems="center"
                justifyContent={"space-between"}
                gap={["4"]}
                flexWrap={"wrap"}
              >
                <Flex alignItems="center" justifyContent={"start"} gap="2">
                  <WrapItem>
                    <Avatar name={item.contact} size="md" />
                  </WrapItem>
                  <Heading size="xs">{item.contact}</Heading>
                </Flex>

                {item.cash === "in" && (
                  <Flex alignItems={"center"} justifyContent="center">
                    <Badge colorScheme="green" p="1">
                      Cash in
                    </Badge>
                  </Flex>
                )}

                {item.cash === "out" && (
                  <Flex alignItems={"center"} justifyContent="center">
                    <Badge colorScheme="red" p="1">
                      Cash in
                    </Badge>
                  </Flex>
                )}

                <Box>
                  <Text fontSize="sm">Non elit</Text>
                  <Heading size="xs" textTransform="uppercase">
                    R$ {item.value}
                  </Heading>
                </Box>

                <div>
                  <MoreModal name={item.contact} />
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
