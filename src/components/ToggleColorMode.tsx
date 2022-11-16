import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Sun, Moon } from "phosphor-react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Button
        onClick={toggleColorMode}
        bg={useColorModeValue("white", "gray.800")}
      >
        {colorMode === "light" ? <Sun size={22} /> : <Moon size={22} />}
      </Button>
    </div>
  );
};

export default ToggleColorMode;
