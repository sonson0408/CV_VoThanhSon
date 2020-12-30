import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className="card-content">
                    <h5><b>TRÌNH ĐỘ</b></h5>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>CHỨNG CHỈ</th>
                                    <th>NGÀY CẤP</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    <td>Lập trình web php</td>
                                    <td>Tháng 9/2020</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;