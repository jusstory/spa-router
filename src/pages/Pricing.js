import React from 'react';
import pricing from 'img/img_Pricing.png';

const Pricing = () => {
    return (
        <div className="subpage">
            <div className="container">
                <h2 className="subpage_tit">Plans and Pricing</h2>
                <h2 className="subpage_tit2">Get Started</h2>
                <p className="subpage_txt">With a paid plan, you and your entire team get access to 8th Wall’s full set of developer tools to get familiar with building in WebAR, create compelling demos and pitch prospective clients with publicly viewable WebAR experiences. Once you begin work on a commercial project, you must obtain a commercial license</p>
                <img src={pricing} alt="pricing sample"/>
            </div>
        </div>
    );
};

export default Pricing;