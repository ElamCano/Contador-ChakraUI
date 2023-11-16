import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Flex,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function CounterCard() {
  const [counter, setCounter] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <Card align="center" width={400} height={300} borderRadius="xl" maxW="md">
      <CardHeader>
        <Heading size="xl" color="#595959" fontFamily="Quantico">
          Contador
        </Heading>
      </CardHeader>
      <CardBody align-items="center" justify-conten="center">
        <Text color="#8c897f">Aprieta "Click" para comenzar el conteo!</Text>
        <Text color="#7c7c7c" textAlign="center" mt={5} fontSize={40}>
          {counter}
        </Text>
      </CardBody>
      <CardFooter>
        <Flex align="center" justify="space-around" width={300}>
          <Button colorScheme="gray" width={130} onClick={handleClick}>
            Click
          </Button>
          <Button colorScheme="blue" width={130} onClick={onOpen}>
            Reset
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent fontFamily="Quantico">
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Reset
                </AlertDialogHeader>

                <AlertDialogBody>
                  Estás seguro que quieres reiniciar el contador?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancelar
                  </Button>
                  <div onClick={handleReset}>
                    <Button colorScheme="blue" onClick={onClose} ml={3}>
                      Sí, estoy seguro
                    </Button>
                  </div>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </CardFooter>
    </Card>
  );
}
