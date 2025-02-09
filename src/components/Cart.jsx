import React from "react";
import useCartsStore from "../store/useCartsStore";
import useProductsStore from "../store/useProductsStore";
import toast from "react-hot-toast";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartsStore();
  const { products } = useProductsStore();
  const product = products.find((el) => el.id === productId);
  const cost = product.price * quantity;

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      if (confirm("Are you Sure to Delete this Item")) {
        removeCart(id);
        toast.success("you delete a item succesfully")
      }
    }
  };

  return (
    <div className="border border-black px-5 py-2 grid grid-cols-6 items-center">
      <div className=" col-span-1">
        <img src={product.image} className="w-16" alt="" />
      </div>
      <div className=" col-span-3">
        <p>{product.title}</p>
        <p className=" text-gray-400"> Price : ({product.price})</p>
      </div>
      <div className=" col-span-1 ">
        <p>Quantity</p>
        <div className="flex gap-3 ">
          <button
            onClick={ handleDecrease}
            className=" bg-gray-700 border text-white border-black px-2 py-0.5 hover:scale-105"
          >
            -
          </button>
          {quantity}
          <button
            onClick={handleIncrease}
            className=" bg-gray-700 border text-white border-black px-2 py-0.5 hover:scale-105"
          >
            +
          </button>
        </div>
      </div>
      <div className=" col-span-1">
        <p className="text-2xl font-bold text-end">{cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
