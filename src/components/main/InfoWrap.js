import React from 'react';
import engine from 'img/ar-engine-2.svg';
import cloud from 'img/cloud-edit.svg';
import hosting from 'img/hosting.svg';

const InfoWrap = () => {
    return (
        <section className="info_wrap">
            <h2 className="tit">The Complete WebAR Solution</h2>
            <div className="row-wrap">
                <div className="col">
                    <img src={engine} className="info_img" alt="ar-engine-2 icon"/>
                    <h3 className="sub_tit">AR Engine</h3>
                    <p className="txt">
                        8th Wall’s custom SLAM engine powers interactive augmented reality on the web.
                    </p>
                </div>
                <div className="col">
                    <img src={cloud} className="info_img" alt="cloud-edit icon"/>
                    <h3 className="sub_tit">Cloud Editor</h3>
                    <p className="txt">
                        Develop WebAR projects using our fully featured Editor and collaborate with team members in real time.
                    </p>
                </div>
                <div className="col">
                    <img src={hosting} className="info_img" alt="hosting icon"/>
                    <h3 className="sub_tit">Built-In Hosting</h3>
                    <p className="txt">
                        Launch rich, interactive AR experiences that can be viewed directly in a mobile browser. No apps required.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InfoWrap;
