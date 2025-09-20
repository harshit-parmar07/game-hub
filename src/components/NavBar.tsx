import { HStack } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react/dist/types/components/avatar/namespace";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} {...({} as any)} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
