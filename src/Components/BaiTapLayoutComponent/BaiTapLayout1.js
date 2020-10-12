import React, { Component } from "react";
import Carousel from "./Carousel";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";

export default class BaiTap1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
