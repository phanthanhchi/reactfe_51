import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(newProps, currenState) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true
  }
  render() {
    console.log("render");
    return (
      <div>
        <header>Header component</header>
        <h1>LifeCycle number:{this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        123
        {this.state.number<3?
        <ChildComponent />:''}
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  //hàm này chạy khi setstate hoặc thay đổi props
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
