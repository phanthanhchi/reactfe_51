import React, { Component } from "react";
import swal from 'sweetalert2'
export default class FormComponent extends Component {
  state = {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChangeInput = (event) => {
    let { name, value } = event.target;

    //xử lý value
    let newValues = { ...this.state.values }; //tạo ra value mới gia trị = values cũ

    //lấy ra attribute types(các thuộc tính tự thêm goijla attribute)
    let types = event.target.getAttribute("types");

    newValues[name] = value; //thay đổi giá trị bên trong values

    // xứ lý lỗi
    let newErrors = { ...this.state.errors };
    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    //validattion các trường đặc biệt
    if (types === "phoneNumber") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số !";
      }
    }
    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Email không hợp lệ!";
      }
    }
    this.setState(
      {
        values: newValues, //gán values = value mới
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <form
        className="card"
        onSubmit={(event) => {
          //cản sự kiện submit lại trang của browser
          event.preventDefault();
          let valid = true;
          //duyệt thuộc tính trong ob values ( duyệt thuộc tính trong đối tượng thì dùng es6 for in)
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }
          if (!valid) {
            //alert("Dữ liệu không hợp lệ !");
            swal.fire('Thông Báo','Dữ liệu không hợp lệ','error')
            return;//chặn sự kiện submit
          }
          swal.fire('Thông Báo','Thêm người dùng thành công','success')
          console.log("submit");
        }}
      >
        <div className="card">
          <div className="card-header bg-dark text-light font-weight-bold">
            <span>THÔNG TIN NGƯỜI DÙNG</span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <span>Mã Người Dùng</span>
                  <input
                    value={this.state.values.maNguoiDung}
                    className="form-control"
                    name="maNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.maNguoiDung}</p>
                </div>
                <div className="form-group">
                  <span>Tên Người Dùng</span>
                  <input
                    value={this.state.values.tenNguoiDung}
                    className="form-control"
                    name="tenNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">
                    {this.state.errors.tenNguoiDung}
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <span>Số điện thoại</span>
                  <input
                    types="phoneNumber"
                    value={this.state.values.soDienThoai}
                    className="form-control"
                    name="soDienThoai"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group">
                  <span>Email</span>
                  <input
                    types="email"
                    value={this.state.values.email}
                    className="form-control"
                    name="email"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>

              <div className="col-12 text-right">
                <button className="btn btn-success">Thêm người dùng</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
