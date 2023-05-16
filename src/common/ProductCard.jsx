import { Box, Image, Badge, Flex, Text } from "@chakra-ui/react";

export const ProductCard = ({ product }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      p={6}
    >
      {product.discount && (
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

      <Image src={product.productImage} alt={product.modelName} />

      <Flex
        mt={2}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize="xl" fontWeight="semibold" mb={2}>
          {product.modelName}
        </Text>

        <Text fontWeight="bold" fontSize="2xl">
          ${product.price}
        </Text>
      </Flex>
    </Box>
  );
};
