import React from "react";
import KetQuaTroChoiF from "./KetQuaTroChoiF";
import XucXacF from "./XucXacF";

export default function GameXucXacF() {
  return (
    <div
      style={{
        backgroundImage: "url(./img/bgGame.png)",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        fontFamily:"fontGame"
      }}
    >
      <h1 className="text-center display-4">BÀI TẬP GAME XÚC XẮC</h1>
      <XucXacF />
      <KetQuaTroChoiF />
    </div>
  );
}
