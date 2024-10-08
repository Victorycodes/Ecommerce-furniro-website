import React from "react";
import "../css/Layout.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, setCurrentPage}) => {
  return (
    <div className="layout">
      <Header setCurrentPage={setCurrentPage} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
