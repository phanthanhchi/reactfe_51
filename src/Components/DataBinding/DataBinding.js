import React, { Component } from "react";

export default class DataBinding extends Component {
  //! thuộc tính của lớp đối tượng => Sử dụng được ở nhiều phương thức trong lớp đối tượng
  hocVien = {
    ma: 1,
    avatar: "https://picsum.photos/200/200",
    tenHocVien: "Le Trung Hai",
  };

  //! phương thức => có thể gọi trong các phương khác của lớp đối tượng
  renderHocVien = () => {
    return (
      <div className="card text-left">
        <img className="card-img-top" src={this.hocVien.avatar} alt />
        <div className="card-body">
          <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
          <p className="card-text">{this.hocVien.ma}</p>
        </div>
      </div>
    );
  };

  render() {
    //! binding bằng biến
    let title = "CyberSoft";
    let imgUrl = "https://picsum.photos/200/200";

    //! binding bằng hàm
    const renderImg = () => {
      //? giao diện hàm muốn render ra giao diện phải trả về chuỗi, số or jsx
      return (
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={imgUrl} />
        </div>
      );
    };

    return (
      <div className="container">
        data
        <div id="title">{title}</div>
        <img src={imgUrl} className="w-25" />
        <input className="w-25 form-controll" value={title} />
        {renderImg()}
        <ul>
          <li>Ma hoc vien: {this.hocVien.ma}</li>
          <li>Ma hoc vien: {this.hocVien.tenHocVien}</li>
          <li>
            Avatar: <img src={this.hocVien.avatar} width="200" height="200" />
          </li>
        </ul>
        {this.renderHocVien()}
      </div>
    );
  }
}
