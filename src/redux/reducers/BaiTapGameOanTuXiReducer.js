const stateDefault = {
  playerChon: "bua",
  mangLuaChon: [
    { luaChon: "keo", hinhAnh: "../img/oantuxi/keo.png" },
    { luaChon: "bua", hinhAnh: "../img/oantuxi/bua.png" },
    { luaChon: "bao", hinhAnh: "../img/oantuxi/bao.png" },
  ],
  ketQua: "Oẳn...Tù...Xì...",
  soBanThang: 0,
  tongSoBanChoi: 0,
  computerChon: "null",
};
const BaiTapGameOanTuXiReducer = (state = stateDefault, action) => {
  
  switch (action.type) {
    case "PLAYER_CHON": {
      state.playerChon = action.luaChon;
      state.computerChon="null"
      state.ketQua="Oẳn...Tù...Xì..."
      return { ...state };
    }
    case "PLAY_GAME": {
    
      const luaChonNgauNhien = Math.floor(Math.random() * 3);
      state.computerChon = state.mangLuaChon[luaChonNgauNhien].luaChon;
state.ketQua="Oẳn...Tù...Xì..."
      return { ...state };
    }
    case "END_GAME":{
         state.tongSoBanChoi += 1;
         if(state.computerChon===state.playerChon){
           state.ketQua="Hòa Nhé !!!"
         }else {
           if(
             (state.playerChon==="keo"&&state.computerChon==="bao")||
             (state.playerChon==="bua"&&state.computerChon==="keo")||
             (state.playerChon==="bao"&&state.computerChon==="bua")   )
             {
               state.ketQua="Bạn Thắng !!!";
               state.soBanThang+=1;
             }else{
               state.ketQua="Bạn Thua !!!"
             }
         }
         return { ...state }; 
    }
  }
  return { ...state };
};
export default BaiTapGameOanTuXiReducer;
