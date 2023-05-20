import { Box, Image, Badge, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Box
      as={Link}
      to={`/products/${product.id}`}
      maxW="250px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      p={2}
      position="relative"
    >
      {product.discount > 0 && (
        <Badge
          position="absolute"
          top={2}
          right={2}
          borderRadius="md"
          px={2}
          colorScheme="red"
        >
          {product.discount}% off
        </Badge>
      )}

      <Image
        src={product.product_img}
        alt={product.name}
        objectFit="cover"
        mx="auto"
      />

      <Flex
        mt={2}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize="lg" fontWeight="semibold" mb={2}>
          {product.name}
        </Text>

        <Text fontWeight="bold" fontSize="xl">
          ${product.price}
        </Text>
      </Flex>
    </Box>
  );
};
