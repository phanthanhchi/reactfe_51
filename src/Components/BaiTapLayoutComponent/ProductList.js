import React, { Component } from "react";
import SmartPhone from "./SmartPhone";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark p-5">
        <h1 className="text-white text-center mb-3">BEST SMARTPHONE</h1>
        <div className="row">
          <SmartPhone />
          <SmartPhone />
          <SmartPhone />
          <SmartPhone />
        </div>
      </div>
    );
  }
}
