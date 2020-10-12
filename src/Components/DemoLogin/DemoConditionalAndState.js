import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /** isLogin là thuộc tính của class
      true: đã login => hiện tên ng dùng
      false: chưa login => hiện nút login
  */

  //? state: là trạng thái của component dùng để lưu và cập nhật component
  state = {
    isLogin: false,
  };
  //! isLogin = false; => cách này sai vì render k chạy lại

  handleLogin = () => {
    this.setState({ isLogin: true });
  };

  // phương thức của class
  renderLogin = () => {
    if (this.state.isLogin) {
      // hiện tên ng dùng
      return <p>Hello Hai</p>;
    } else {
      // hiện nút login
      return (
        <button className="btn btn-primary" onClick={this.handleLogin}>
          Login
        </button>
      );
    }
  };

  //? render là phương thức cập nhật lại giao diện
  render() {
    console.log("run render");
    return (
      <div className="container">
        <h2 className="text-center">Conditional And State</h2>
        {this.renderLogin()}
      </div>
    );
  }
}
