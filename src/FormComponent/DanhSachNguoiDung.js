import React, { Component } from 'react'
import FormComponent from './FormComponent'

export default class DanhSachNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <FormComponent/>
                <table className="table container">
                    <thead>
                        <tr>
                            <th>Mã Người Dùng</th>
                            <th>Tên Người Dùng</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                </table>
            </div>
        )
    }
}
