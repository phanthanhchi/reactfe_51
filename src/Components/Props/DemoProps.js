import React, { Component } from "react";
import ClassProp from "./ClassProp";
import FunctionProp from "./FunctionProp";

export default class DemoProps extends Component {
  state = {
    ten: "Hai",
    lop: 51,
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Props</h2>
        <FunctionProp
          //? cach truyen props
          hoTen={this.state.ten}
          class={this.state.lop}
        />
        <ClassProp hoTen={this.state.ten} class={this.state.lop} />
      </div>
    );
  }
}
