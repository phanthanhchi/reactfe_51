import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-center mt-5">
                    Bạn chọn : <span className="text-danger">TÀI</span>
                </div>
                <div className="display-4 text-center mt-5">
                    Số bàn thắng : <span className="text-warning">0</span>
                </div>
                <div className="display-4 text-center mt-5">
                    Tổng số bàn chơi : <span className="text-primary">0</span>
                </div>
            </div>
        )
    }
}
