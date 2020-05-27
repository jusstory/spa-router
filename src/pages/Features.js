import React from 'react';
import features from 'img/img_Features.png';

const Features = () => {
    return (
        <div className="subpage">
            <div className="container">
                <h2 className="subpage_tit">Features</h2>
                <p className="subpage_txt">Use 8th Wall to build immersive WebAR experiences that work on every mobile device. No app required.</p>
                <img src={features} alt="features sample"/>
            </div>
        </div>
    );
};

export default Features;