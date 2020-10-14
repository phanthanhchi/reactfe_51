//File khai báo tất cả các state của ứng dụng
//
import {combineReducers} from 'redux'
//import BaiTapGioHangRedux from '../../BaiTapRedux/BaiTapGioHangRedux';
//import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapThuKinhReducer from './BaiTapThuKinhReducer';

//state tổng của ứng dụng
export const rootReducer = combineReducers({
    //Nơi khai báo các state theo từng nghiệp vụ
    //StateBaiTapGioHang: BaiTapGioHangReducer,
    StateBaiTapThuKinh: BaiTapThuKinhReducer,
    
})


