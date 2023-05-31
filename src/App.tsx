import { useEffect, useState } from "react";

import { Box, Button, Grid, GridItem, Wrap, Show } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";

import NavBAr from "./Components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"Nav" "main"`,
        lg: `"Nav Nav"
          "aside main"`,
      }}
    >
      <GridItem p="2" area="Nav">
        <NavBAr />
      </GridItem>
      <Show above="lg">
        <GridItem p="2" bg="pink.300" area="aside">
          asiderr
        </GridItem>
      </Show>

      <GridItem p="2" area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
