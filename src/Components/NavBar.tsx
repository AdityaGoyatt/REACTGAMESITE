import {
  Flex,
  Spacer,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import logo from "./images/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {}
const NavBAr = () => {
  return (
    <HStack p={2} justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBAr;
