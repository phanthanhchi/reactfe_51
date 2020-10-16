import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;

    return (
      <div className="card text-left">
        <img
          style={{ width: "100%", height: 300 }}
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt="hinh anh"
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.themSpVaoGh(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    themSpVaoGh: (sanPhamClick) => {
      console.log("san pham click",sanPhamClick);
      let spGH = { ...sanPhamClick, soLuong: 0 };
      console.log("san pham click them soluong",spGH);
      let action = {
        type: "THEM_GIO_HANG",
        spGH: spGH,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
