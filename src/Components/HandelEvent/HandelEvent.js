import React, { Component } from "react";

export default class HandelEvent extends Component {
  handelChange = () => {
    alert("Hello");
  };

  showMess = (mess) => {
    alert(`hello ${mess}`);
  };
  render() {
    return (
      <div>
        {/* xử lý sự kiện truyền callback*/}
        <button onClick={this.handelChange}>Hello</button>

        {/* Xử lý sự kiện hàm trung gian*/}
        <button
          onClick={() => {
            this.handelChange();
          }}
        >
          Click
        </button>

        <button onClick={this.showMess.bind(this, "Hai")}>Show mess</button>

        <button
          onClick={() => {
            this.showMess("Hailee");
          }}
        >
          Show mess 2
        </button>
      </div>
    );
  }
}
