import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import useInput from "../../hooks/useInput";
import { addProduct } from "../../utils/adminActions";

export const AddProducts = () => {
  const name = useInput();
  const product_img = useInput();
  const description = useInput();
  const features = useInput();
  const price = useInput();
  const discount = useInput();
  const stock = useInput();

  const [showAlert, setShowAlert] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const productData = {
      name: name.value,
      product_img: product_img.value,
      description: description.value,
      features: features.value,
      price: parseFloat(price.value),
      discount: parseInt(discount.value),
      stock: Number(stock.value),
    };

    addProduct(productData)();

    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Box
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.700")}
      maxW="md"
      mx="auto"
      mt="10"
    >
      {showAlert && (
        <Alert status="success">
          <AlertIcon />
          Product successfully added!
        </Alert>
      )}
      <form onSubmit={handleAddProduct}>
        <Stack spacing={6}>
          <FormControl isRequired>
            <FormLabel>Model Name</FormLabel>
            <Input id="name" {...name} placeholder="Name" />
          </FormControl>

          <FormControl>
            <FormLabel>Image</FormLabel>
            <Input id="product_img" {...product_img} placeholder="Image URL" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              id="description"
              {...description}
              placeholder="Description"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Features</FormLabel>
            <Textarea id="features" {...features} placeholder="Features" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              id="price"
              type="number"
              step="0.01"
              {...price}
              placeholder="Price"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Discount</FormLabel>
            <Input
              id="discount"
              type="number"
              {...discount}
              placeholder="Discount"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Stock</FormLabel>
            <Input id="stock" type="number" {...stock} placeholder="Stock" />
          </FormControl>

          <Button
            type="submit"
            backgroundColor="#3498DB"
            size="lg"
            fontSize="md"
            color="white"
          >
            Add Product
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
