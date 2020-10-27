import { SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst";


const stateDefault = {
    mangNguoiDung: [
        {maNguoiDung:1,tenNguoiDung:'Nguyễn văn a',soDienThoai:'09090909',email:'nguyenvana@gmail.com'},
        {maNguoiDung:2,tenNguoiDung:'Trần Văn Tèo',soDienThoai:'08080808',email:'tranvanteo@gmail.com'},
    ],
    nguoiDungChinhSua : {
        maNguoiDung:'',
        tenNguoiDung:'',
        soDienThoai:'',
        email:''
    },
    stateForm : {
        values: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        maNguoiDungXoa: ''
    }
}

export const QuanLyNguoiDungReducer = (state=stateDefault,action)=>{
    console.log(action)
    switch(action.type){
        case XOA_NGUOI_DUNG: {
            let mangNguoiDungCapNhat = [...state.mangNguoiDung];
            //Xóa phần tử trong mảng = cách lấy ra các phần tử không phải phần tử đó
            mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(nd => nd.maNguoiDung != action.maNguoiDung);


            state.mangNguoiDung = mangNguoiDungCapNhat;
            return {...state}
        }
        case SUA_NGUOI_DUNG :{
            //Lấy người dụng được click từ nút sửa 
            let nguoiDungDuocClick = {...action.nguoiDungChinhSua};
            //Cập nhật state người dùng chỉnh sửa = người dùng được click
            state.nguoiDungChinhSua = nguoiDungDuocClick;
            //Xử lý theo cách 2 <NewFormComponent></NewFormComponent>
            state.stateForm = {...state.stateForm,values:nguoiDungDuocClick};
            return {...state};
        }
        case 'HANDLE_CHANGE_INPUT': {
            state.stateForm = {...action.newState};
            return {...state}
        }

        case 'CAP_NHAT_THONG_TIN':{
            //Cập nhật lại thông tin người dùng trong mảng
            let mangNguoiDungCapNhat = [...state.mangNguoiDung];
            //Tìm ra người dùng có mã cần cập nhật thông tin
            let index = mangNguoiDungCapNhat.findIndex(nd => nd.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung);
            //Cập nhật thông tin của vị trí người dùng đó = người dùng mới

            mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;


            state.mangNguoiDung = mangNguoiDungCapNhat;

            return {...state};
        }


        case 'THEM_NGUOI_DUNG': {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung,action.nguoiDung];

            state.mangNguoiDung = mangNguoiDungCapNhat
            return {...state}
        }

        default : return {...state}
    }
}