import {
  Flex,
  Spacer,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

interface Props {
  clickLogic: () => void;
}
const NavBAr = ({ clickLogic }: Props) => {
  return (
    <Flex m={2} minWidth="max-content" alignItems="center" gap="2">
      <Heading size="md">Chakra App</Heading>
      <Spacer />
      <FormControl display="flex" alignItems="center">
        <Spacer />
        <FormLabel htmlFor="dark-mode" mb="0">
          <Heading size="md" color="tomato">
            Dark Mode
          </Heading>
        </FormLabel>
        <Switch onClick={clickLogic} id="dark-mode" />
      </FormControl>
    </Flex>
  );
};

export default NavBAr;
