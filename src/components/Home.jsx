import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ProductGrid } from "./ProductGrid";

export const Home = () => {
  return (
    <Box backgroundColor="gray.100" minHeight="400px">
      <Heading size="xl">Home section</Heading>
      <ProductGrid />
    </Box>
  );
};
