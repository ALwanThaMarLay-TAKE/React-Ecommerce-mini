import React from "react";
import { Link, useParams } from "react-router-dom";

import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useProductsStore from '../store/useProductsStore'

const ProductDetails = () => {
  const { productSlug} = useParams();
  const {products} = useProductsStore()
  
  

  const currentProduct = products.find((product) => product.slug == productSlug);
  
  return ( 
    <section className="">
      <Container>
        <BreadCrumb currentPage="Product Details" />
   
        <div className=" py-16 px-32 mt-5  border border-gray-600  flex gap-3">
          <div className="flex flex-col justify-center items-center w-1/2">
            <img className=" mb-2 w-1/2   " src={currentProduct.image} alt="" />
            <div className="flex justify-center gap-2">
              <img className="w-1/6 " src={currentProduct.image} alt="" />
              <img className=" w-1/6" src={currentProduct.image} alt="" />
              <img className=" w-1/6" src={currentProduct.image} alt="" />
            </div>
          </div>

          <div className=" flex  gap-4 flex-col w-2/3 ">
            <h3 className="text-3xl font-bold ">{currentProduct.title}</h3>
            <span className="text-base  bg-gray-400 w-fit px-2 py-1 rounded-sm">
              {currentProduct.category}
            </span>
            <p className="text-xl">{currentProduct.description}</p>

    <div className=" mt-auto">

            <Rating rate={currentProduct.rating.rate} />
            <div className="flex w-full items-end justify-between ">
              <p>Price : ({currentProduct.price})</p>
              <button className="border border-black px-3 py-2">
                Add Cart
              </button>
            </div>
    </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
