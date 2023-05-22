import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const AdminProductCard = ({ product }) => {
  return (
    <Flex key={product.id} align="center" mb="5">
      <Image
        src={product.image}
        alt={product.name}
        boxSize="50px"
        objectFit="cover"
        mr="3"
      />
      <Box>
        <Text fontWeight="bold">{product.name}</Text>
        <Text>{product.description}</Text>
      </Box>
    </Flex>
  );
};
