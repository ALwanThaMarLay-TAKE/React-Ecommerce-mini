import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import carts from "../data/carts";


const ProductCart = ({
  product: {
    id,
    title,
    rating: { rate },
    price,
    image,
  },
}) => {
  

  return (
    <Link
      to={`product-details/${id}`}
      className="flex flex-col border items-start p-5 gap-5 border-black"
    >
      <img src={image} className="h-40" />
      <p className="line-clamp-2 font-bold">{title}</p>
      <Rating rate={rate} />
      <div className="flex w-full items-end justify-between ">
        <p>{price}</p>
        <p>{carts.map(el => el.cost)}</p>

       {carts.find(el => el.id == id )?(<button className=" text-sm border border-black px-3 py-1 text-white bg-black">Added</button>) : (<button className=" text-sm border border-black px-3 py-1">Add cart</button>)}
     
    
      </div>
    </Link>
  );
};

export default ProductCart;
