import React from "react";
import BaiTapGameXucXac from "./BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
import BaiTapOanTuXi from "./BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi";
// import "./App.css";
// import ChonMauXe from "./Components/BaiTapChonMauXe";
// import BaiTap1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
// import DataBinding from "./Components/DataBinding/DataBinding";
// import DemoConditionalAndState from "./Components/DemoLogin/DemoConditionalAndState";
// import HandelEvent from "./Components/HandelEvent/HandelEvent";
// import DemoListAndKeys from "./Components/ListAndKeys/DemoListAndKeys";
// import DemoProps from "./Components/Props/DemoProps";
import BaiTapGioHang from "./Components/BaiTapGioHang";
function App() {
  //! Bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lưu ý: Nội dung component phải đc bao phủ bởi 1 thẻ bất kỳ
  return (
    <div>
      {/* <BaiTap1 /> 
      <DataBinding /> 
      <HandelEvent />
      ------------------------------Buoi 2--------------------------------------------
      <DemoConditionalAndState />
      <ChonMauXe />
      <DemoListAndKeys />
   
      <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapGameXucXac/> */}
      <BaiTapOanTuXi />
    </div>
  );
}

export default App;
