import { Stack, Heading, Box, Text, Flex } from "@chakra-ui/react";
import NewTransaction from "./NewTransaction";

const Header = () => {
  return (
    <Flex p="6" alignItems={"center"} justifyContent="space-between">
      <Stack>
        <Heading size="lg">Dashboard</Heading>
        <Text fontSize={"14px"}>Good to see you here</Text>
      </Stack>
      <NewTransaction />
    </Flex>
  );
};

export default Header;
