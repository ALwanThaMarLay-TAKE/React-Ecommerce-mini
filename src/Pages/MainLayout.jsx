import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Header />
      
      <Outlet />
      <Footer />
      <Toaster/>
    </>
  );
};

export default MainLayout;
