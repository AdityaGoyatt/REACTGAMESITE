import { useEffect, useState } from "react";

import { Box, Button, Grid, GridItem, Wrap, Show } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";

import NavBAr from "./Components/NavBar";
import GenreMainList from "./Components/GenreMainList";
import { genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"Nav" "main"`,
        lg: `"Nav Nav"
          "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem p="2" area="Nav">
        <NavBAr />
      </GridItem>
      <Show above="lg">
        <GridItem p="2" area="aside" paddingX={5}>
          <GenreMainList
            handleClick={(genre) => setSelectedGenre(genre)}
            selectGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem p="2" area="main">
        <PlatformSelector />
        <GameGrid mainGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
