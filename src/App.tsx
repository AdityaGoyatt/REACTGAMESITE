import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Wrap,
  Show,
  HStack,
} from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";

import NavBAr from "./Components/NavBar";
import GenreMainList from "./Components/GenreMainList";
import { genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";
import { PlatformListItem } from "./hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
export interface gameQuery {
  genre: genre | null;
  platform: PlatformListItem | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

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
            handleClick={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem p="2" area="main">
        <HStack spacing={5} paddingLeft={4} marginBottom={4}>
          <PlatformSelector
            selectedCurrentPlatform={gameQuery.platform}
            handleClick={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSelector
            currentOrder={gameQuery.sortOrder}
            handleClick={(value) =>
              setGameQuery({ ...gameQuery, sortOrder: value })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
