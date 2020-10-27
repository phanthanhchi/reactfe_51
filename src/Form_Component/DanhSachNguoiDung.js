import React, { Component } from "react";
import NewFormComponent from "./NewFormComponent";
import { connect } from "react-redux";
import {
  suaNguoiDungAction,
  xoaNguoiDungAction,
} from "../redux/actions/QuanLyNguoiDungActions";
class DanhSachNguoiDung extends Component {
  renderDanhSachNguoiDung = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      console.log(this.props.mangNguoiDung);
      return (
        <tr key={index}>
          <td>{nguoiDung.maNguoiDung}</td>
          <td>{nguoiDung.tenNguoiDung}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.email}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                //người đùng dược click
                let action = suaNguoiDungAction(nguoiDung);
                //dispatch nguoidungchinhsua lên reducer
                this.props.dispatch(action);
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                // let action={
                //     type:'XOA_NGUOI_DUNG',
                //     maNguoiDung:nguoiDung,
                //     maNguoiDung
                // }
                // this.props.dispatch(action)

                this.props.dispatch(
                  xoaNguoiDungAction(this.props.nguoiDung.maNguoiDung)
                );
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log("danh sách:", this.props);
    return (
      <div className="container">
        {/* <FormComponent /> */}
        <NewFormComponent />
        <table className="table container">
          <thead>
            <tr>
              <th>Mã Người Dùng</th>
              <th>Tên Người Dùng</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
            </tr>
            <tbody>{this.renderDanhSachNguoiDung()}</tbody>
          </thead>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
  };
};
export default connect(mapStateToProps)(DanhSachNguoiDung);
