import React, { Component } from "react";
import glassList from "./data.json";

//Import thư viện kết nối react component và redux store
import { connect } from "react-redux";

class BaiTapThuKinh extends Component {
  renderGlassItem = () => {
    return glassList.map((glass, index) => {
      return (
        <div className="col-2 my-auto" key={index}>
          <button
            className="btn btn-light btn-lg"
            onClick={() => {
              this.props.chonLoaiKinh(glass);
            }}
          >
            <img src={glass.pic} width={80} alt="chi" />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          Position: "relative",
          top: 0,
          left: 0,
          //opacity:0.3,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          height:653,
        }}
      >
        <img
          src="./img/background.jpg"
          alt="chi"
          style={{
            height: 651,
            width: "100%",
            opacity: 0.4,
            position: "absolute",
          }}
        />

        <div
                style={{
                    Position: "absolute",
                    top: 0,
                    left: 0,
                    //opacity:0.3,
                   // backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
        >
          <h2
            className="text-center display-4 font-weight-bold text-primary"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              paddingTop: 20,
              width: "100%",
              height: 110,
            }}
          >
            TRY GLASSES APP ONLINE
          </h2>
          <div className="row container text-center m-auto">
            <div className="col-6 position-relative">
              <div className="">
                <img src="./img/model.jpg" height={300} alt="chi" />
              </div>

              <div
                className="position-absolute"
                style={{
                  backgroundColor: "rgba(255, 100, 0, 0.3)",
                  width: 246.14,
                  height: 105,
                  bottom: 0,
                  left: 154.455,
                }}
              >
                <p className="text-left text-primary p-1 m-0 font-weight-bold">
                  {this.props.loaiKinh.name}
                </p>
                <p className="p-1 m-0 text-left ">
                  {this.props.loaiKinh.desc}
                </p>
              </div>

              <div
                className="position-absolute"
                style={{
                  width: 246.14,
                  height: 42,
                  top: 75,
                  left: 154.455,
                  opacity: 0.8,
                }}
              >
                <img src={this.props.loaiKinh.pic} height={45} alt="chi" />
              </div>
            </div>

            <div className="col-6">
              <img src="./img/model.jpg" height={300} alt="chi" />
            </div>
          </div>
          <div
            className="row mx-auto my-4"
            style={{
              backgroundColor: "rgba(255, 255, 0, 0.6)",
              height: 191,
              width: 900,
            }}
          >
            {this.renderGlassItem()}
          </div>
        </div>
      </div>
    );
  }
}

//lấy state từ redux store biến thành props của componet
//tham số state : đại diện cho rootReducer
const mapStateToDrop = (rootReducer) => {
  return {
    loaiKinh: rootReducer.StateBaiTapThuKinh.loaiKinh,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    chonLoaiKinh: (glass) => {
      console.log(glass);
      const action = {
        type: "CHON_KINH",
        glass,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToDrop, mapDispatchToProps)(BaiTapThuKinh);
