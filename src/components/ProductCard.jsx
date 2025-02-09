import React from "react";
import Rating from "./Rating";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useCartsStore from "../store/useCartsStore";


const ProductCard = ({
  product: {
    id,
    title,
    rating: { rate },
    price,
    image,
    slug
  },
}) => {
  const nav = useNavigate()
  const { carts , addCart} = useCartsStore();
  const isAdded = carts.find((el) => el.productId == id) ? true : false;
  const handleAddCart =(e) => {
    const newCart = {
      id: Date.now(),
      productId : id,
      quantity : 1
    }
    e.stopPropagation()
    addCart(newCart)

  }
  console.log("product card slug" , slug)

  return (
    <div
    onClick={() => {
 
     nav(`product-details/${slug}`)
    }}
      
      className="flex flex-col border items-start p-5 gap-5 border-black"
    >
      <img src={image} className="h-40" />
      <p className="line-clamp-2 font-bold">{title}</p>
      <Rating rate={rate} />
      <div className="flex w-full items-end justify-between ">
        <p>{price}</p>
        <p>{carts.map((el) => el.cost)}</p>
        <button disabled={isAdded} onClick={handleAddCart}
          className={` ${
            isAdded ? "text-white bg-black " : ""
          } text-sm border border-black px-3 py-1 `}
        >
          {isAdded ? "Added" : "dd carAt"}
        </button>
        
      </div>
    </div>
  );
};

export default ProductCard;
