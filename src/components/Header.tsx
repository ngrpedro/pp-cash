import { Stack, Heading, Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box p="6">
      <Stack>
        <Heading size="lg">Dashboard</Heading>
        <Text fontSize={"14px"}>Good to see you here</Text>
      </Stack>
    </Box>
  );
};

export default Header;
