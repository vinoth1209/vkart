import React, { memo } from "react";
import Header from "./headers/Header";
import Footer from "./footer/Footer";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default memo(Layout);
