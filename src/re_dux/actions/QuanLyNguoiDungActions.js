import { XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst";
import {SUA_NGUOI_DUNG} from "../constants/QuanLyNguoiDungConst"
export const xoaNguoiDungAction = (maNguoiDung) => {
  //....

  return {
    type: XOA_NGUOI_DUNG,
    maNguoiDung,
  };
};
//định nghia action chỉnh sủa nguoi dung
export const suaNguoiDungAction=(nguoiDung)=>{
    return{
        type:SUA_NGUOI_DUNG,
        nguoiDungChinhSua:nguoiDung
    }
}