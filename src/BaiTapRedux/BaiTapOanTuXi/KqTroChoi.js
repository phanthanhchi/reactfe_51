import React, { Component } from "react";
import { connect } from "react-redux";
class KqTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning mt-4">{this.props.ketQua}</div>
        <div className="text-success mt-4" style={{ fontSize: 45 }}>
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="text-success mt-4" style={{ fontSize: 45 }}>
          Tổng số bàn chơi:{" "}
          <span className="text-warning">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.stateBaiTapGameOanTuXi.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameOanTuXi.tongSoBanChoi,
    ketQua: state.stateBaiTapGameOanTuXi.ketQua,
  };
};
export default connect(mapStateToProps)(KqTroChoi);
