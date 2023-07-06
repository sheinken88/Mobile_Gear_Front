import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../state/products/productsActions";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AdminProductCard } from "./AdminProductCard";
import { AdminProductsDetails } from "./AdminProductDetails";
import { deleteProduct } from "../../state/products/productsActions";

export const AdminProductsGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [selectedProduct, setSelectedProduct] = React.useState({});
  const [refetch, setRefetch] = useState(false);

  const handleDelete = (product, event) => {
    event.stopPropagation();
    dispatch(deleteProduct(product.id));
    setRefetch(!refetch);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, refetch]);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  return !selectedProduct.id ? (
    <Box p="5">
      {products.map((product) => {
        return (
          <div
            style={{ cursor: "pointer" }}
            key={product.id}
            onClick={() => {
              handleClick(product);
            }}
          >
            <AdminProductCard product={product} handleDelete={handleDelete} />
          </div>
        );
      })}
    </Box>
  ) : (
    <AdminProductsDetails
      selectedProduct={selectedProduct}
      setSelectedProduct={setSelectedProduct}
    />
  );
};
