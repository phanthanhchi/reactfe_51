import React, { Component } from "react";

export default class DemoListAndKeys extends Component {
  danhSachKhoaHoc = ["Nodejs", "Reactjs", "Vuejs"];

  renderKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">List And Keys</h2>
        <h3>Danh sách khóa học</h3>
        <ul>{this.renderKhoaHoc()}</ul>
      </div>
    );
  }
}
