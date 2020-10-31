import React from "react";
import BaiTapBookingTicket from "./BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket";
import BaiTapGameXucXac from "./BaiTapRedux/BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
// import "./App.css";
// import ChonMauXe from "./Components/BaiTapChonMauXe";
// import BaiTap1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
// import DataBinding from "./Components/DataBinding/DataBinding";
// import DemoConditionalAndState from "./Components/DemoLogin/DemoConditionalAndState";
// import HandelEvent from "./Components/HandelEvent/HandelEvent";
// import DemoListAndKeys from "./Components/ListAndKeys/DemoListAndKeys";
// import DemoProps from "./Components/Props/DemoProps";
import BaiTapGioHang from "./Components/BaiTapGioHang";
import DanhSachNguoiDung from "./FormComponent/DanhSachNguoiDung";
import BaiTapDoiMauXeHook from "./Hook/DemoHookUseState/BaiTapDoiMauXeHook";
import DemoHookUseEffect from "./Hook/DemoHookUseState/DemoHookUseEffect/DemoHookUseEffect";
import DemoHookUseMemo from "./Hook/DemoHookUseState/DemoHookUseMeMo/DemoHookUseMemo";
import DemoHookUseSate from "./Hook/DemoHookUseState/DemoHookUseSate";
import DemoUseCallBack from "./Hook/DemoHookUseState/DemoUseCallBack/DemoUseCallBack";
import GameXucXacF from "./Hook/GameXucXacReactF/GameXucXacF";
import LifeCycle from "./LifeCycle/LifeCycle";
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
      {/* <LifeCycle/> */}
      {/* <DanhSachNguoiDung/> */}
      {/* <DemoHookUseSate/> */}
      {/* <BaiTapDoiMauXeHook/> */}
      {/* <DemoHookUseEffect/> */}
      {/* <DemoUseCallBack/> */}
      {/* <DemoHookUseMemo/> */}
      {/* <GameXucXacF /> */}
      <BaiTapBookingTicket/>
    </div>
  );
}

export default App;
