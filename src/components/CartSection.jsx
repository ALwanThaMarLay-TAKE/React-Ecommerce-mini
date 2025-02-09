import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import { Link } from "react-router-dom";
// import carts from "../data/carts";
import useCartsStore from "../store/useCartsStore";
import useProductsStore from "../store/useProductsStore";
import empty from '../assect/download.png'

const CartSection = () => {
  const { carts } = useCartsStore();
  const { products } = useProductsStore();
  const total = carts.reduce((pv, cv) => {
    const product = products.find((el) => el.id === cv.productId);
    const cost = product.price * cv.quantity;
    return (pv += cost);
  }, 0);
  const tax = total * 0.05;
  const netTotal = total - tax ;

  return (
    <div className="flex flex-col flex-grow -mb-5  ">
      <div className={` ${carts.length == 0 ? "block" : "hidden"} mx-auto  `}>
        <img src={empty} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}
      </div>
      <div className=" p-5 flex justify-end gap-10 border-t-black border-t  mt-auto ">
        <div className=" text-right">
          <p className="text-gray-300">Total</p>
          <p className=" font-bold">{total.toFixed(2)}</p>
        </div>
        <div className=" text-right">
          <p className="text-gray-300">Tax</p>
          <p className=" font-bold">{tax.toFixed(2)}</p>
        </div>
        <div className=" text-right">
          <p className="text-gray-300"> Net Total</p>
          <p className=" font-bold">{netTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className=" text-end">
        <button className=" px-4 py-1 rounded-sm border border-black ">
          Order now
        </button>
      </div>
    </div>
  );
};

export default CartSection;
