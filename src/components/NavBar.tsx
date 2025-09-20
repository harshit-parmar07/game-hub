import { HStack, Text } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react/dist/types/components/avatar/namespace";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} {...({} as any)} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
