import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

//Import thư viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return <SanPhamGHRedux spGioHang={spGioHang} key={index} />;
    });
  };
  render() {
     let gioHang=this.props.gioHang
    if (gioHang.length!==0) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Mã sp</th>
              <th>Tên sp</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      );
    } else {
      return <div></div>;
    }
  }
}

//Lấy state từ redux store biến thành props của component
//tham số state: Đại diện cho rootReducer
const mapStateToProps = (state) => {
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(GioHangRedux); //Kết nối giữa gioHangReduxComponent và redux store
