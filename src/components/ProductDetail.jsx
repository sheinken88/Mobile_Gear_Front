import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../state/products/productsActions";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id]);

  return <div>{product.modelName}</div>;
};
