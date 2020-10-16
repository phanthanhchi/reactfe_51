//state của bài tập xúc xắc
const stateDefault = {
  banChon: "Tai",
  mangXucXac: [
    { so: 1, hinhAnh: "./img/1.png" },
    { so: 1, hinhAnh: "./img/1.png" },
    { so: 1, hinhAnh: "./img/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};
const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.taiXiu;
      return { ...state };
    }
    case "RANDOM_XUC_XAC": {
      let mangXucXacNgauNhien = [];
      for (var i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;
        const xucXacNgauNhien = {
          so: soNgauNhien,
          hinhAnh: `./img/${soNgauNhien}.png`,
        };
        //push vào mảng
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let tongDiem = state.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
        return (tongDiemXX += xucXac.so);
      }, 0);
      if (
        (tongDiem > 9 && state.banChon === "Tài") ||
        (tongDiem <= 9 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }
      state.tongSoBanChoi += 1;
      return { ...state };
    }
  }
  return { ...state };
};
export default BaiTapGameXucXacReducer;
