import { DAT_GHE,HUY_GHE } from "../constants/BaiTapDatVeConst";

const stateDefault = {
  danhSachGheDangDat: [{ soGhe: "A1", gia: 1000 }],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [ ...state.danhSachGheDangDat] ;
      let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe );
      if (index !== -1) {
        //khi người dùng click ghế đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      //cập nhật lại state => giao dien render lai
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
    }
    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [ ...state.danhSachGheDangDat] ;
      let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe );
      if (index !== -1) {
        //khi người dùng click ghế đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } 
      //cập nhật lại state => giao dien render lai
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
    }

    default:
      return { ...state };
  }
};
export default BaiTapDatVeReducer;
