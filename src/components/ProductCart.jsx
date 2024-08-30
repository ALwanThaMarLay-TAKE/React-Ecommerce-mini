import React from "react";
import Rating from "./Rating";

const ProductCart = ({
  product: {
    title,
    rating: { rate },
    price,
    image,
  },
}) => {
  return (
    <div className="flex flex-col border items-start p-5 gap-5 border-black">
      <img src={image} className="h-40" />
      <p className="line-clamp-2 font-bold">{title}</p>
      <Rating rate={rate} />
      <div className="flex w-full items-end justify-between ">
        <p>{price}</p>
        <button className="border border-black px-3 py-2">Add Cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
