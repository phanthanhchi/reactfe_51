import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-3"
            width={100}
            height={100}
            
            src={`./img/oantuxi/${this.props.pChon}.png`}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/oantuxi/player.png"
          alt="./img/oantuxi/player.png"
        />
        <div className="row">
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => {
                this.props.playerChon("keo");
              }}
            >
              <img
                width={50}
                height={50}
                src="./img/oantuxi/keo.png"
                alt="./img/oantuxi/keo.png"
              />
            </button>
          </div>
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => {
                this.props.playerChon("bua");
              }}
            >
              <img
                width={50}
                height={50}
                src="./img/oantuxi/bua.png"
                alt="./img/oantuxi/bua.png"
              />
            </button>
          </div>
          <div className="col-4">
            <button
              className="btnItem"
              onClick={() => {
                this.props.playerChon("bao");
              }}
            >
              <img
                width={50}
                height={50}
                src="./img/oantuxi/bao.png"
                alt="./img/oantuxi/bao.png"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pChon: state.stateBaiTapGameOanTuXi.playerChon,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playerChon: (keoBuaBao) => {
      console.log("player chọn", keoBuaBao);
      let luaChon = keoBuaBao;
      let action = {
        type: "PLAYER_CHON",
        luaChon: luaChon,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
