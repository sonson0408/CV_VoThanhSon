import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className ="card-action">
                    <h5><b>THÔNG TIN CÁ NHÂN</b></h5>
                        <div className = "row mt">
                            <div className="col s12 m6 20 x16">
                                <p><b>Họ và tên: </b>Võ Thanh Sơn</p>
                                <p><b>Năm sinh: </b>1999</p>
                                <p><b>Địa chỉ: </b>QuangNam</p>
                            </div>
                            <div className = "s12 m6 20 x16">
                                <p><b>Email: </b>voson0408@gmail.com</p>
                                <p><b>Điện thoại: </b>0346526102</p>       
                                <p><b>Ngoại ngữ: </b>Tiếng anh</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;