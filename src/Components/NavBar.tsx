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

interface Props {
  clickLogic: () => void;
}
const NavBAr = ({ clickLogic }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Spacer />
      <FormLabel htmlFor="dark-mode" mb="0">
        <Text>
          Dark Mode
          <Switch onClick={clickLogic} id="dark-mode" />
        </Text>
      </FormLabel>
    </HStack>
  );
};

export default NavBAr;

// <Flex m={2} minWidth="max-content" alignItems="center" gap="2">
//   <Heading size="md">Chakra App</Heading>
//   <Spacer />
//   <FormControl display="flex" alignItems="center">
//     <Spacer />
//     <FormLabel htmlFor="dark-mode" mb="0">
//       <Heading size="md" color="tomato">
//         Dark Mode
//       </Heading>
//     </FormLabel>
//     <Switch onClick={clickLogic} id="dark-mode" />
//   </FormControl>
// </Flex>
