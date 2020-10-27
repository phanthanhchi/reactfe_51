import React from "react";
import { connect, useSelector } from "react-redux";
export default function XucXacF(props) {
  //
  const { mangXucXac } = useSelector((state) => state.stateBaiTapGameXucXac);
  console.log("componentXucXac",mangXucXac);
  const renderXucXac = () => {
    return mangXucXac.map((xucXac, index) => {
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
  return (
    <div className="row text-center">
      <div className="col-4">
        <button className="btn btn-success p-5">
          <span className="display-4">TÀI</span>
        </button>
      </div>

      <div className="col-4">{renderXucXac()}</div>

      <div className="col-4">
        <button className="btn btn-danger p-5">
          <span className="display-4">XỈU</span>
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps=state=>{
//     mangXucXac:state.stateBaiTapGameXucXac.mangXucXac
// }
// export def
