import { Box, Image, Badge, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const originalPrice = Math.round(
    product.price * (product.discount / 100 + 1)
  );

  return (
    <Box
      as={Link}
      to={`/products/${product.id}`}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      p={5}
      position="relative"
      boxShadow="md"
      _hover={{ boxShadow: "xl" }}
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
        boxSize="200px"
      />

      <VStack mt={4} alignItems="stretch" spacing={3}>
        <Text fontSize="md" fontWeight="semibold" isTruncated>
          {product.name}
        </Text>

        {product.discount > 0 ? (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            fontSize="lg"
            fontWeight="bold"
          >
            <Text color="gray" as="s">
              ${originalPrice}
            </Text>
            <Text color="black">${product.price}</Text>
          </Flex>
        ) : (
          <Text fontSize="lg" fontWeight="bold" color="black">
            ${product.price}
          </Text>
        )}
      </VStack>
    </Box>
  );
};
