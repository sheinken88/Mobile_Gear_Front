import React from "react";
import { useDispatch } from "react-redux";
import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { updateQuantity, removeItemFromCart } from "../../state/cart/cartSlice";

export const CartItem = ({ id, name, image, price, quantity }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <Flex align="center" justify="space-between">
      <Image src={image} alt={name} boxSize="100px" objectFit="cover" />
      <Text flex="1" mx="4">
        {name}
      </Text>
      <Flex align="center">
        <IconButton
          onClick={decrement}
          aria-label="Decrease"
          icon={<MinusIcon />}
        />
        <Text mx="2">{quantity}</Text>
        <IconButton
          onClick={increment}
          aria-label="Increase"
          icon={<AddIcon />}
        />
      </Flex>
      <Text>${price * quantity}</Text>
      <IconButton
        onClick={handleRemove}
        aria-label="Delete"
        icon={<DeleteIcon />}
      />
    </Flex>
  );
};
