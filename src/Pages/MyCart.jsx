import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import CartSection from '../components/CartSection';
import Footer from '../components/Footer';
import Container from '../components/Container';

export const MyCart = () => {
  return (
    <>
      <Container  className=" min-h-full flex flex-col flex-grow" >
      <BreadCrumb currentPage="My cart" />
      <CartSection/>

    
      </Container>
    </>
  )
}
export default MyCart;
