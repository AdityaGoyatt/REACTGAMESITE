import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardLayout = ({ children }: Props) => {
  return (
    <Box width="250px" borderRadius="10px" overflow="hidden">
      {children}
    </Box>
  );
};

export default CardLayout;
