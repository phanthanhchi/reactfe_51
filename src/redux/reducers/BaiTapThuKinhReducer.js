//Giá trị ban đầu của state
const stateDefaut = {
  loaiKinh: 
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      pic: "./img/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  
};
//hàm reducer trả về state của ứng dụng
const BaiTapThuKinhReducer = (state = stateDefaut, action) => {
  switch(action.type){
    case "CHON_KINH":{
      state.loaiKinh=action.glass;
    }
  }
  return { ...state };
};
export default BaiTapThuKinhReducer;
