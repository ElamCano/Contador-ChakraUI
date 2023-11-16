import "./App.css";
import CounterCard from "./components/CounterCard";
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
      <CounterCard />
    </Flex>
  );
}

export default App;
