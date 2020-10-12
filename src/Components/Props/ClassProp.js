import React, { Component } from "react";

export default class ClassProp extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="text-center mt-5">
        <h3>Class Prop</h3>
        <p>Ten {this.props.hoTen}</p>
        <p>Lop {this.props.class}</p>
      </div>
    );
  }
}
