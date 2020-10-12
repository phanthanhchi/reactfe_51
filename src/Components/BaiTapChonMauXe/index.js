/**
  các bước thực hiện:
    b1: dàn layout - done
    b2: xác định data thay đổi và lưu vào state - done
    b3: lấy data trong state đi binding ra jsx - done
    b4: bắt sự kiện click cho các nút chọn màu - done
    b5: cập nhật lại giá trị trong state - done
*/
import React, { Component } from "react";

export default class ChonMauXe extends Component {
  state = {
    imgCar: "./img/car/products/red-car.jpg",
  };

  handleChangeColor = (color) => {
    console.log(color);
    this.setState({
      imgCar: color,
    });
  };

  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              className="btn"
              onClick={() =>
                this.handleChangeColor("./img/car/products/black-car.jpg")
              }
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() =>
                this.handleChangeColor("./img/car/products/red-car.jpg")
              }
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() =>
                this.handleChangeColor("./img/car/products/silver-car.jpg")
              }
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() =>
                this.handleChangeColor("./img/car/products/steel-car.jpg")
              }
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.state.imgCar} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}
