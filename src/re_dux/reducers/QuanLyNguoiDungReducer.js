import {
  SUA_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../constants/QuanLyNguoiDungConst";
const stateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyễn Văn A",
      soDienThoai: "09777777",
      email: "aaa@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Nguyễn Văn B",
      soDienThoai: "09770000",
      email: "bbb@gmail.com",
    },
  ],
  nguoiDungChinhSua: {
    maNguoiDung: "",
    tenNguoiDung: "",
    soDienThoai: "",
    email: "",
  },
  stateForm: {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    maNguoiDungXoa: "",
  },
};
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case XOA_NGUOI_DUNG: {
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(
        (nd) => nd.maNguoiDung != action.maNguoiDung
      );
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      let nguoiDungDuocClick = { ...action.nguoiDungChinhSua };
      state.nguoiDungChinhSua = nguoiDungDuocClick;
      return { ...state };
    }
    case 'HANDLE_CHANGE_INPUT':{
        console.log("newState :",action.newState);
        state.stateForm={...action.newState}
        return{...state}
    }
    default:
      return { ...state };
  }
};
