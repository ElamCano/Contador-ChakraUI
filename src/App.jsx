import "./App.css";
import ContadorResponsive from "./components/ContadorResponsive";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="#18171c"
      fontFamily="Quantico"
    >
      <ContadorResponsive />
    </Flex>
  );
}

export default App;
