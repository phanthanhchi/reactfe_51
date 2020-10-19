//File khai báo tất cả các state của ứng dụng
//
import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import baiTapGameXucXacReducer from "./BaiTapGameXucXacReducer";
import baiTapGameOanTuXiReducer from "./BaiTapGameOanTuXiReducer";
//state tổng của ứng dụng
export const rootReducer = combineReducers({
  //Nơi khai báo các state theo từng nghiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,
  stateBaiTapGameXucXac: baiTapGameXucXacReducer,
  stateBaiTapGameOanTuXi: baiTapGameOanTuXiReducer,
  
});
