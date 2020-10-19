import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
        0%{top:-50px;}
        25%{top:100px;}
        50%{top:-50px;}
        75%{top:100px;}
        100%{top:0px;}
      }`;
    return (
      <div>
        <div className="text-center playerGame">
          <style>{keyframe}</style>
          <div className="theThink" style={{ position: "relative" }}>
            <img
              style={{
                position: "absolute",
                transform: "rotate(180deg)",
                left:'30%',
                animation: `randomItem${Date.now()} 0.5s`,
               
              }}
              className="mt-3" width={100} height={100}
              src={`./img/oantuxi/${this.props.computerChon}.png`}
            />
          </div>
          <div className="speech-bubble"></div>
          <img
            style={{ width: 200, height: 200 }}
            src="./img/oantuxi/playerComputer.png"
            alt="./img/oantuxi/playerComputer.png"
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computerChon: state.stateBaiTapGameOanTuXi.computerChon,
  };
};
export default connect(mapStateToProps)(Computer);
