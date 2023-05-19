import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, updateQuantity } from "../state/cart/cartSlice";
import { fetchProduct } from "../state/products/productsActions";
import {
  Box,
  Heading,
  Text,
  Badge,
  Button,
  IconButton,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const cartItems = useSelector((state) => state.cart.items);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id]);

  if (!product || !product.brand) {
    return <div>Loading...</div>;
  }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.product_img,
      quantity: count > 0 ? count : 1,
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
    <Flex p="20">
      <Box flex="1">
        <Image src={product.product_img} alt={product.name} borderRadius="md" />
      </Box>
      <Box flex="1" ml="5">
        <Text fontSize="sm" color="orange" textTransform="uppercase">
          {product.brand.name}
        </Text>
        <Heading color="black" mb="5">
          {product.name}
        </Heading>
        <Text color="gray">{product.description}</Text>
        <Flex align="center" mt="5">
          <Text color="black">${product.price}</Text>
          <Badge colorScheme="orange" ml="2">
            {product.discount}%
          </Badge>
        </Flex>
        <Text color="gray" as="s">
          ${Math.round(product.price * (product.discount / 100 + 1))}
        </Text>
        <Divider mt="5" mb="5" />
        <Flex align="center" justify="space-between">
          <Flex>
            <IconButton
              onClick={decrement}
              aria-label="Decrease"
              icon={<MinusIcon />}
            />
            <Box border="1px solid" borderColor="gray.200" px="2" py="1" mx="2">
              {count}
            </Box>
            <IconButton
              onClick={increment}
              aria-label="Increase"
              icon={<AddIcon />}
            />
          </Flex>
          <Button
            onClick={handleAddToCart}
            backgroundColor="#3498DB"
            color="white"
          >
            Add to cart
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
