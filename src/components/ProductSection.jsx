import React from "react";
import Container from "./Container";
import ProductCart from "./ProductCart";
import products from "../data/products";

const ProductSection = () => {

  return (
    <section>
      <Container>
        <p className="mb-3 text-sm text-gray-300 ">Product section</p>
        <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCart product={product} key={product.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
