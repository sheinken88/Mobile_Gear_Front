import {
  Box,
  Image,
  Badge,
  Flex,
  Text,
  VStack,
  IconButton,
  useColorModeValue as mode,
  Tooltip,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, updateQuantity } from "../state/cart/cartSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);

  const originalPrice = Math.round(
    product.price * (product.discount / 100 + 1)
  );

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!isAuthenticated) alert("Login to add items to your cart");
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.product_img,
      quantity: 1,
    };

    const existingItem = cartItems[item.id];

    if (existingItem) {
      const newQuantity = existingItem.quantity + item.quantity;
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    } else {
      dispatch(addItemToCart(item));
    }
  };

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
      <Tooltip
        label="Add to cart"
        placement="top"
        hasArrow
        bg={mode("gray.800", "white")}
        color={mode("white", "gray.800")}
      >
        <IconButton
          position="relative"
          top={2}
          left={2}
          aria-label="Add to cart"
          icon={<FaShoppingCart />}
          size="sm"
          color={mode("white", "gray.800")}
          bg={mode("gray.800", "white")}
          onClick={handleAddToCart}
        />
      </Tooltip>
    </Box>
  );
};
