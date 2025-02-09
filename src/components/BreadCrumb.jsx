import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({currentPage}) => {
  return (
    <div className="w-full flex items-center gap 3">
      <Link
        className="underline font-bold hover:text-blue-500 text-gray-600"
        to={"/"}
      >
        Home
      </Link>{" "}
      <span>/</span>
      <p className="text-sm text-gray-400">{currentPage}</p>
    </div>
  );
};

export default BreadCrumb;
