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
  return { ...state };
};
export default BaiTapGameXucXacReducer;
