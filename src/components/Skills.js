import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h5><b>KĨ NĂNG</b></h5>
                        <div className = "row mt-top">
                            <div className = "col s6">
                                <p>HTML</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate green" style={{width : '70%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>CSS</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate green" style={{width : '70%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Javascipt</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate green" style={{width : '50%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Jquery</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate green" style={{width : '50%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>PHP</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate green" style={{width : '80%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>SQL</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate green" style={{width : '60%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;