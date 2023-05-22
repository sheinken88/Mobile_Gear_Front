import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../state/products/productsActions";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AdminProductCard } from "./AdminProductCard";
import { AdminProductsDetails } from "./AdminProductDetails";
import { deleteProduct } from "../../utils/adminActions";
export const AdminProductsGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [selectedProduct, setSelectedProduct] = React.useState({});
  const handleDelete = (product) => {
    deleteProduct(product.id)();
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, products]);
  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  return !selectedProduct.id ? (
    <Box p="5">
      {products.map((product) => {
        return (
          <>
            <div
              style={{ cursor: "pointer" }}
              key={product.id}
              onClick={() => {
                handleClick(product);
              }}
            >
              <AdminProductCard product={product} />
            </div>
            <button
              onClick={() => {
                handleDelete(product);
              }}
            >
              DELETE
            </button>{" "}
          </>
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
