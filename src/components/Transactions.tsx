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
} from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import { useState } from "react";

const Transactions = () => {
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
            <Flex
              alignItems="center"
              justifyContent={"space-between"}
              gap="12"
              flexWrap={"wrap"}
            >
              <Flex alignItems="center" justifyContent={"center"} gap="2">
                <WrapItem>
                  <Avatar name="Leia Organa" size="md" />
                </WrapItem>
                <Heading size="xs">Leia Organa</Heading>
              </Flex>

              <Box>
                <Text fontSize="sm">A summary</Text>
                <Heading size="xs" textTransform="uppercase">
                  $$ 99.90
                </Heading>
              </Box>

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
                <IconButton
                  aria-label="Search database"
                  icon={<Plus size={22} />}
                />
              </div>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent={"space-between"}
              gap="12"
              flexWrap={"wrap"}
            >
              <Flex alignItems="center" justifyContent={"center"} gap="2">
                <WrapItem>
                  <Avatar name="Leia Organa" size="md" />
                </WrapItem>
                <Heading size="xs">Leia Organa</Heading>
              </Flex>

              <Box>
                <Text fontSize="sm">A summary</Text>
                <Heading size="xs" textTransform="uppercase">
                  $$ 99.90
                </Heading>
              </Box>

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
                <IconButton
                  aria-label="Search database"
                  icon={<Plus size={22} />}
                />
              </div>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent={"space-between"}
              gap="12"
              flexWrap={"wrap"}
            >
              <Flex alignItems="center" justifyContent={"center"} gap="2">
                <WrapItem>
                  <Avatar name="Leia Organa" size="md" />
                </WrapItem>
                <Heading size="xs">Leia Organa</Heading>
              </Flex>

              <Box>
                <Text fontSize="sm">A summary</Text>
                <Heading size="xs" textTransform="uppercase">
                  $$ 99.90
                </Heading>
              </Box>

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
                <IconButton
                  aria-label="Search database"
                  icon={<Plus size={22} />}
                />
              </div>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent={"space-between"}
              gap="12"
              flexWrap={"wrap"}
            >
              <Flex alignItems="center" justifyContent={"center"} gap="2">
                <WrapItem>
                  <Avatar name="Leia Organa" size="md" />
                </WrapItem>
                <Heading size="xs">Leia Organa</Heading>
              </Flex>

              <Box>
                <Text fontSize="sm">A summary</Text>
                <Heading size="xs" textTransform="uppercase">
                  $$ 99.90
                </Heading>
              </Box>

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
                <IconButton
                  aria-label="Search database"
                  icon={<Plus size={22} />}
                />
              </div>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default Transactions;
