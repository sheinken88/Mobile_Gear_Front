import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../state/products/productsActions";
import { SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "../common/ProductCard";
import { useParams } from "react-router-dom";

export const ProductGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="10" p="5">
      {products.slice(0, 20).map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </SimpleGrid>
  );
};
