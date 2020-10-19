import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Player from "./Player";
import Computer from "./Computer";
import KqTroChoi from "./KqTroChoi";
import { connect } from "react-redux";
class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KqTroChoi />
            <button
              className="btn btn-success p-3 display-4 mt-4"
              onClick={() => {
                this.props.playGame();
              }}
            >
              PLAY GAME
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
//const mapStateToProps=(state)
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      let count = 0;
      let randomComputer = setInterval(() => {
        dispatch(action);
        count++;
        if (count >= 10) {
          clearInterval(randomComputer);
          dispatch({
              type: "END_GAME",
          })
        }
         }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
