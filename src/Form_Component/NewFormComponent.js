import React, { Component } from "react";
import swal from "sweetalert2";
import { connect } from "react-redux";
import { xoaNguoiDungAction } from "../redux/actions/QuanLyNguoiDungActions";
class NewFormComponent extends Component {
  handleChangeInput = (event) => {
    let { name, value } = event.target;

    //xử lý value
    let newValues = { ...this.props.stateForm.values }; //tạo ra value mới gia trị = values cũ

    //lấy ra attribute types(các thuộc tính tự thêm goijla attribute)
    let types = event.target.getAttribute("types");

    newValues[name] = value; //thay đổi giá trị bên trong values

    // xứ lý lỗi
    let newErrors = { ...this.props.stateForm.errors };
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
    // this.setState(
    //   {
    //     values: newValues, //gán values = value mới
    //     errors: newErrors,
    //   },
    //   () => {
    //     console.log(this.props.stateForm);
    //   }
    // );

    let action = {
      type: "HANDLE_CHANGE_INPUT",
      newState: {
        values: newValues, //gan values=value moi
        errors: newErrors,
      },
    };

    // gui len reducer stateform moi
    this.props.dispatch(action);
  };

  render() {
    //lấy giá trị từquảnlýngườidungreducer.nguoidungchinhsua về render lên các value
    //let {maNguoiDung,tenNguoiDung,soDienThoai,email}=this.props.nguoiDungChinhSua;
    let {
      maNguoiDung,
      tenNguoiDung,
      soDienThoai,
      email,
    } = this.props.stateForm;
    return (
      <form
        className="card"
        onSubmit={(event) => {
          //cản sự kiện submit lại trang của browser
          event.preventDefault();
          let valid = true;
          //duyệt thuộc tính trong ob values ( duyệt thuộc tính trong đối tượng thì dùng es6 for in)
          for (let tenThuocTinh in this.props.stateForm.values) {
            if (this.props.stateForm.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          for (let tenThuocTinh in this.props.stateForm.errors) {
            if (this.props.stateForm.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }
          if (!valid) {
            //alert("Dữ liệu không hợp lệ !");
            swal.fire("Thông Báo", "Dữ liệu không hợp lệ", "error");
            return; //chặn sự kiện submit
          }
          swal.fire("Thông Báo", "Thêm người dùng thành công", "success");
          console.log("submit");
        }}
      >
        <div className="card">
          <div className="card-header bg-dark text-light font-weight-bold">
            <span>THÔNG TIN NGƯỜI DÙNGggggggg</span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <span>Mã Người Dùng</span>
                  <input
                    value={maNguoiDung}
                    className="form-control"
                    name="maNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">
                    {this.props.stateForm.errors.maNguoiDung}
                  </p>
                </div>
                <div className="form-group">
                  <span>Tên Người Dùng</span>
                  <input
                    value={tenNguoiDung}
                    className="form-control"
                    name="tenNguoiDung"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">
                    {this.props.stateForm.errors.tenNguoiDung}
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <span>Số điện thoại</span>
                  <input
                    types="phoneNumber"
                    value={soDienThoai}
                    className="form-control"
                    name="soDienThoai"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">
                    {this.props.stateForm.errors.soDienThoai}
                  </p>
                </div>
                <div className="form-group">
                  <span>Email</span>
                  <input
                    types="email"
                    value={email}
                    className="form-control"
                    name="email"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">
                    {this.props.stateForm.errors.email}
                  </p>
                </div>
              </div>

              <div className="col-12 text-right">
                <button className="btn btn-success">Thêm người</button>

                <button
                  type="button"
                  className="btn btn-primary ml-2"
                  onClick={() => {
                    let action = {
                      type: "CAP_NHAT_THONG_TIN",
                      nguoiDungCapNhat: this.props.stateForm.values,
                    };
                    this.props.dispatch(action);
                  }}
                >
                  Cap Nhat Thong Tin
                </button>
              </div>
            </div>
            <div className="col-12">
              <input
                name="maNguoiDungXoa"
                placeholder="Nhập vào mã người dùng cần xóa"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    maNguoiDungXoa: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  //dispatch mã người dùng lên ruducer
                  // let action = {
                  //   type: "XOA_NGUOI_DUNG",
                  //   maNguoiDung: this.props.stateForm,
                  //   maNguoiDungXoa,
                  // };
                  this.props.dispatch(
                    xoaNguoiDungAction(this.props.nguoiDung.maNguoiDung)
                  );
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua,
    stateForm: state.QuanLyNguoiDungReducer.stateForm,
    //lay state form tu redux ve =>binding len ham render
  };
};
export default connect(mapStateToProps)(NewFormComponent);
