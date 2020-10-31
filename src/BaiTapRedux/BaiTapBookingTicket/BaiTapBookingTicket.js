import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/booking Ticket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <div className="text-warning" style={{ fontSize: "35px" }}>
                Đặt vé xem phim cyberlearn.vn
              </div>
              <div className="mt-2 text-light" style={{ fontSize: "20px" }}>
                Màn Hình
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  //justifyContent: "center",
                  alignItems:'center'
                }}
              >
                <div className="screen"></div>
                {this.renderHangGhe()}
              </div>
            </div>
            <div className="col-4">
              <div
                className="text-warning"
                style={{ fontSize: "35px" }}
              >
                Danh sách ghế bạn chọn
              </div>

              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
