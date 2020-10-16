//Giá trị ban đầu của state
const stateDefaut = {
  gioHang: [],
};

//Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //cập nhật lại giỏ hàng
      let gioHangUpdate = [...state.gioHang];
      //tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spClick) => spClick.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        let sp = { ma: 2, ten: "B", sl: 5 };
        let gioHang = [{ ma: 1, ten: "A", sl: 0 }];
        let gioHangUP = {a:1, b:4, a:5,b:10}
        //gioHangUP.push({ ...sp, sl: 10 });
        console.log("giỏ hàng update :",gioHangUP)

        console.log("spGH", action.spGH);
        gioHangUpdate.push({ ...action.spGH });
        console.log("so luong them vào", gioHangUpdate);
      }
      //gán state cũ = giá trị mới
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
  }
  return { ...state };
};

export default BaiTapGioHangReducer;
