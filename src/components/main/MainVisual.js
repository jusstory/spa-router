import React from 'react';
import myVideo from 'img/header-video.mp4';
import auggie from 'img/auggie.svg';

const MainVisual = () => {
    return (
        
        <section className="visual">
            <video id="myVideo" controls loop autoPlay>
                <source src={myVideo} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
            <h2 className="tit">True WebAR</h2>
            <p className="txt">Powerful tools to create <br/>meaningful augmented reality</p>
            <div className="form_wrap">
                <form>
                    <fieldset>
                        <div className="email_box">
                            <label htmlFor="email_input" className="hiddenInline">Email address</label>
                            <input type="text" id="email_input" className="email_input" placeholder="Email address"/>
                            <button type="submit" className="submit_btn">
                                <span className="nowrap">Try 14 days </span>
                                <span className="nowrap">free →</span>
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="imgbox">
                <img src={auggie} alt="auggie img"/>
            </div>
        </section>
    );
};

export default MainVisual;

// 'use strict';
// import React, {Component} from 'react';
// // import myVideo from 'img/header-video.mp4';
// import auggie from 'img/auggie.svg';

// class MainVisual extends Component {
//         constructor (props) {
//         super(props);

//         this.state = {
//             videoURL: 'http://127.0.0.1:5500/src/img/header-video.mp4'
//         }
//     }
//     render () {
//         return (
            
//             <section className="visual">
//                 <video id="myVideo" loop autoPlay>
//                     <source src={this.state.videoURL} type="video/mp4"/>
//                     Your browser does not support HTML5 video.
//                 </video>
//                 <h2 className="tit">True WebAR</h2>
//                 <p className="txt">Powerful tools to create <br/>meaningful augmented reality</p>
//                 <div className="form_wrap">
//                     <form>
//                         <fieldset>
//                             <div className="email_box">
//                                 <label for="email_input" className="hiddenInline">Email address</label>
//                                 <input type="text" id="email_input" className="email_input" placeholder="Email address"/>
//                                 <button type="submit" className="submit_btn">Try 14 days free →</button>
//                             </div>
//                         </fieldset>
//                     </form>
//                 </div>
//                 <div className="imgbox">
//                     <img src={auggie} alt="auggie image"/>
//                 </div>
//             </section>
//         );
//     }
// }

// export default MainVisual;
