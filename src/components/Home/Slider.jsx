import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../Product/ProductCard";
import { fetchDiscountedProducts } from "../../state/products/productsActions";

export const Slider = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.discountedProducts);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    dispatch(fetchDiscountedProducts(15));
  }, [dispatch]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev < products.length - 3 ? prev + 1 : prev));
  };

  return (
    <Flex justify="center" align="center" width="100%">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={handlePrevSlide}
        isDisabled={currentSlide === 0}
        margin="10"
      />

      <Stack direction="horizontal" gap="6">
        {products.slice(currentSlide, currentSlide + 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Stack>

      <IconButton
        icon={<ChevronRightIcon />}
        onClick={handleNextSlide}
        isDisabled={currentSlide >= products.length - 3}
        margin="10"
      />
    </Flex>
  );
};
