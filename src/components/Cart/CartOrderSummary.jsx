import React from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export const CartOrderSummary = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const deliveryAmount = 5; // por ahora lo mantengo estatico

  const subtotal = Object.values(items).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box
      p="4"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      w="100%"
    >
      <Heading as="h2" size="lg" mb="4">
        Order Summary
      </Heading>
      <Box mb="4">
        <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text>Delivery: ${deliveryAmount.toFixed(2)}</Text>
      </Box>
      <Text fontSize="xl" mb="4">
        Total: ${(subtotal + deliveryAmount).toFixed(2)}
      </Text>
      <Button colorScheme="teal" width="full">
        Checkout
      </Button>
    </Box>
  );
};
