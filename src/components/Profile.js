import React, { Component } from 'react';
import ImgProfile from '../Image/avtcv.jpg'
class Profile extends Component {
    render() {
        return (
            <div>
                <div className = 'card'>
                    <div className = 'card-image'>
                        <img className = 'activator' src = {ImgProfile} alt = ""/>
                     </div>
                     <div className = "card-content">
                         <span className = "card-title activator grey-text text-darken-4"><h4>Võ Thanh Sơn</h4></span>
                         <p><b>Sinh viên Đại học Sư Phạm Đà Nẵng, 21 tuổi</b></p>
                     </div>
                </div>
            </div>
        );
    }
}
export default Profile;

