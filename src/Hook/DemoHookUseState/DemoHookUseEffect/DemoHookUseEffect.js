import React, { useState, useEffect } from "react";

export default function DemoHookUseEffect() {
  const [number, setNumber] = useState(1);

//   useEffect(() => {
//     //hàm này sẽ chạy khi lần đầu component render và các lần render lại
//     console.log("componentDidMount");
//     console.log("componentDidUpdate");
//   });

//   useEffect(() => {
//     // Tham số 2 mảng rỗng => chỉ chay chạy lần đầu tiên thay thế componentDidMount
//     console.log("componentDidMount");
//   }, []);

  useEffect(() => {
    // Tham số 2 mảng là giá trị thay đổi => thì hàm này sẽ thực thi
    console.log("componentDidUpdate");
  }, [number]);

  useEffect(()=>{
      return()=>{
          //hủy thì components sẽ gọi hàm này
          console.log('thay cho componentWillUnMount')
      }
  })
  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        setNumber
      </button>
    </div>
  );
}
