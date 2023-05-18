import React from "react";

import { addProduct } from "../../utils/adminActions";
import useInput from "../../hooks/useInput";

export const ProductManagement = () => {
  const name = useInput();
  const product_img = useInput();
  const description = useInput();
  const features = useInput();
  const price = useInput();
  const discount = useInput();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const productData = {
      name: name.value,
      product_img: product_img.value,
      description: description.value,
      features: features.value,
      price: parseFloat(price.value),
      discount: parseInt(discount.value),
    };

    await addProduct(productData);
  };

  return (
    <form onSubmit={handleAddProduct}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" {...name} required />
      <br />
      <br />

      <label htmlFor="product_img">Imagen:</label>
      <input type="text" id="product_img" {...product_img} />
      <br />
      <br />

      <label htmlFor="description">Descripción:</label>
      <textarea id="description" {...description} required></textarea>
      <br />
      <br />

      <label htmlFor="features">Características:</label>
      <textarea id="features" {...features}></textarea>
      <br />
      <br />

      <label htmlFor="price">Precio:</label>
      <input type="number" id="price" step="0.01" {...price} required />
      <br />
      <br />

      <label htmlFor="discount">Descuento:</label>
      <input type="number" id="discount" {...discount} />
      <br />
      <br />

      <button type="submit"> Add </button>
    </form>
  );
};
