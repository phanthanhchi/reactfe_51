import React, { Component,PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }
  static getDerivedStateFromProps(newProps, currenState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }
//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate child");
// return true  
// }
  render() {
    return (

      <div>
          <h3>child number: {this.state.number}</h3>
          component child
          </div>  
    )
  }
  componentWillUnmount(){
      //life cycle chạy trước khi component mất khỏi giao diện
      console.log("componentWillUnmount"); 
  }
}
