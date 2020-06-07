import React, { Component }from 'react';
import License from 'components/pricing/license';
import pricing from 'img/img_Pricing.png';
import styled, {css} from 'styled-components';

const license =[
    {
        imgLink : require('img/img_pricing01.png'),
        title : "Pay-Per-View",
        text : "Usage-based billing for variable traffic to your commercial project.",
        priceM :"$1,000",
        includedV: "0 included views",
        priceV : "$0.01"
    },
    {
        imgLink : require('img/img_pricing02.png'),
        title : "Standard Bundle",
        text : "Includes a pre-paid bundle for standard traffic to your commercial project.",
        priceM :"$3,000",
        includedV: "500k included views",
        priceV : "$0.01"
    },
    {
        imgLink : require('img/img_pricing03.png'),
        title : "High Traffic PPV",
        text : "Significantly discounted usage-based billing for high volume traffic to your commercial project.",
        priceM :"$6,000",
        includedV: "0 included views",
        priceV : "$0.0025"
    },
    {
        imgLink : require('img/img_pricing04.png'),
        title : "High Traffic Bundle",
        text : "High Traffic usage-based discounts plus a 5-million-view pre-paid bundle for high volume traffic to your commercial project.",
        priceM :"$6,000",
        includedV: "5m included views",
        priceV : "$0.0025"
    }
]


class Pricing extends Component {
    render(){
        return (
            <div className="subpage">
                <div className="container">
                    <h2 className="subpage_tit">Plans and Pricing</h2>
                    <h2 className="subpage_tit2">Get Started</h2>
                    <p className="subpage_txt">With a paid plan, you and your entire team get access to 8th Wall’s full set of developer tools to get familiar with building in WebAR, create compelling demos and pitch prospective clients with publicly viewable WebAR experiences. Once you begin work on a commercial project, you must obtain a commercial license</p>
                    <img src={pricing} alt="pricing sample"/>
                    <h2 className="subpage_tit2">Get a Commercial License</h2>
                    <p className="subpage_txt">Before you begin work on a commercial project, you must buy a Develop License for $250/ month in the 8th Wall Console. When the project is ready to launch, upgrade to one of the following commercial Launch Licenses:</p>
                    <div className="box_wrap mb30">
                        {license.map((licens, index)=>{
                            return <License imgLink={licens.imgLink} title={licens.title} text={licens.text} priceM={licens.priceM} includedV={licens.includedV} priceV={licens.priceV} key={index}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Pricing;