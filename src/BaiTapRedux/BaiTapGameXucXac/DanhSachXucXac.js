import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachXucXac extends Component {
  render() {
    return (
      <div className =" row mt-5 text-center">
            <div className="col-3">
          <button className="pt-5 btn btn-success">
              <span className="display-4">
                  TÀI
              </span>
          </button>
        </div>
        <div className="col-6">
          <img className="m-5" src="./img/1.png" style={{ width: 50 }}></img>
          <img className="m-5" src="./img/1.png" style={{ width: 50 }}></img>
          <img
            className="m-5"
            src="./img/1.png"
            style={{ width: 50 }}
          ></img>{" "}
        </div>
        <div className="col-3">
          <button className="pt-5 btn btn-danger">
              <span className="display-4">
                  XỈU
              </span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};
export default connect(mapStateToProps)(DanhSachXucXac);
