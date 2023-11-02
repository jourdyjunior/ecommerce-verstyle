import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    document.title = "Fruno Product";
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Product;
