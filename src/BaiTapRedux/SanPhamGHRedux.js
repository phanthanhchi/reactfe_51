import React, { Component } from "react";

export default class SanPhamGHRedux extends Component {
  render() {
    console.log("sp gio hàng s", this.props);
    let {maSP,tenSP,manHinh,heDieuHanh,cameraTr ,cameraS ,ram ,rom ,giaBan,hinhAnh,soLuong}=this.props.spGioHang
    return (
      <tr>
        <td>{maSP}</td>
        <td>{tenSP}</td>
        <td>
          <img src={hinhAnh} height={40} width={45} />
        </td>
    <td>{soLuong}</td>
        <td>{(giaBan*1).toLocaleString()}</td>
    <td>{(soLuong*giaBan).toLocaleString()}</td>
        <td>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}
