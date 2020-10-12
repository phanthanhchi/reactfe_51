import React from "react";

export default function FunctionProp(props) {
  // console.log(props);
  return (
    <div className="text-center mt-5">
      <h3>Function Props</h3>
      <p>Ten: {props.hoTen} </p>
      <p>Lop: {props.class} </p>
    </div>
  );
}
