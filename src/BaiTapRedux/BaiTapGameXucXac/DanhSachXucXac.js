import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachXucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          className="m-5"
          src={xucXac.hinhAnh}
          style={{ width: 50 }}
        ></img>
      );
    });
  };

  render() {
    return (
      <div className=" row mt-5 text-center">
        <div className="col-3">
          <button
            className="pt-5 btn btn-success"
            onClick={() => {
              this.props.datCuoc("TÀI");
            }}
          >
            <span className="display-4">TÀI</span>
          </button>
        </div>
        <div className="col-6">{this.renderXucXac()}</div>
        <div className="col-3">
          <button
            className="pt-5 btn btn-danger"
            onClick={() => {
              this.props.datCuoc("XỈU");
            }}
          >
            <span className="display-4">XỈU</span>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      console.log(taiXiu);
      const action={
          type:'DAT_CUOC',
          taiXiu
      }
      dispatch(action);
    }
  };
};
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac);
