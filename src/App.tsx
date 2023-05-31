import { useEffect, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import dataService, { game, games } from "./Components/gameApi";

import NavBAr from "./Components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ChakraProvider>
      <NavBAr clickLogic={() => console.log("aaa")} />
    </ChakraProvider>
  );
}

export default App;
