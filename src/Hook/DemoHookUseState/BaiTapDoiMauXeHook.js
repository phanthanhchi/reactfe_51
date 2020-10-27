import React, { useState } from "react";
// const arr = []; các giá trị không phải state, không cần render lại khi setstate=>để ở ngoài component
export default function BaiTapDoiMauXeHook() {
  const [state, setState] = useState({
    hinhanh: "./img/car/products/black-car.jpg",
  });
// const thayDoiHinhAnh= (color)=>{
//     const duongDanMoi=`./img/car/products/${color}-car,jpg`;
//     setStateHinh(duongDanMoi)

// }

  return (
    <div>
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              className="btn"
              onClick={() => {
                setState({ hinhanh: "./img/car/products/black-car.jpg" });
              }}
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                setState({ hinhanh: "./img/car/products/red-car.jpg" });
              }}
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                setState({ hinhanh: "./img/car/products/silver-car.jpg" });
              }}
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                setState({ hinhanh: "./img/car/products/steel-car.jpg" });
              }}
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={state.hinhanh} alt="hinh" />
          </div>
        </div>
      </section>
    </div>
  );
}
