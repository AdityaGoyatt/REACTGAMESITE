import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBAr from "./Components/NavBar";
import { ChakraBaseProvider } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBAr />
    </div>
  );
}

export default App;
