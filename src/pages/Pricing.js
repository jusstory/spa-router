import React, { Component }from 'react';
import License from 'components/pricing/license';
import styled, {css} from 'styled-components';
import listCheck from 'img/ico_pricing_checkpng.png'




// const license =[
//     {
//         imgLink : require('img/img_pricing01.png'),
//         title : "Pay-Per-View",
//         text : "Usage-based billing for variable traffic to your commercial project.",
//         priceM :"$1,000",
//         includedV: "0 included views",
//         priceV : "$0.01"
//     },
//     {
//         imgLink : require('img/img_pricing02.png'),
//         title : "Standard Bundle",
//         text : "Includes a pre-paid bundle for standard traffic to your commercial project.",
//         priceM :"$3,000",
//         includedV: "500k included views",
//         priceV : "$0.01"
//     },
//     {
//         imgLink : require('img/img_pricing03.png'),
//         title : "High Traffic PPV",
//         text : "Significantly discounted usage-based billing for high volume traffic to your commercial project.",
//         priceM :"$6,000",
//         includedV: "0 included views",
//         priceV : "$0.0025"
//     },
//     {
//         imgLink : require('img/img_pricing04.png'),
//         title : "High Traffic Bundle",
//         text : "High Traffic usage-based discounts plus a 5-million-view pre-paid bundle for high volume traffic to your commercial project.",
//         priceM :"$6,000",
//         includedV: "5m included views",
//         priceV : "$0.0025"
//     }
// ]
// JSON.stringify(license) // 
// var string = "[ {imgLink:'abc',title:'titleA'}, {imgLinke:'def',title:'titleB'} ]"
// var object = JSON.parse(string); //jSON =javascript object
// object[0].imgLink // 'abc' ...



class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            license: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:3000/license")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                license: result.license
              });
            }
          )
      }

    render(){
        const { license } = this.state;
        return (
            <div className="subpage">
                <div className="container">
                    <h2 className="subpage_tit">Plans and Pricing</h2>
                    <h2 className="subpage_tit2">Get Started</h2>
                    <p className="subpage_txt">With a paid plan, you and your entire team get access to 8th Wall’s full set of developer tools to get familiar with building in WebAR, create compelling demos and pitch prospective clients with publicly viewable WebAR experiences. Once you begin work on a commercial project, you must obtain a commercial license</p>
                    <Started />
                    <h2 className="subpage_tit2">Get a Commercial License</h2>
                    <p className="subpage_txt">Before you begin work on a commercial project, you must buy a Develop License for $250/ month in the 8th Wall Console. When the project is ready to launch, upgrade to one of the following commercial Launch Licenses:</p>
                    <div className="licenseBox_wrap mb30">
                        {license.map((licens, index)=>{
                            return <License imgLink={licens.imgLink} title={licens.title} text={licens.text} priceM={licens.priceM} includedV={licens.includedV} priceV={licens.priceV} key={index}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const starteds =[
    {
        title: "Agency",
        text : "For freelance developers, creative agencies and studios building projects for other companies",
        price : "$99 /",
        // startedList : "Cloud Editor + Hosting"
    },
    {
        title: "Business",
        text : "For companies building projects for themselves",
        price : "$250 /",
        // startedList : "Cloud Editor + Hosting",
        type: "type2"
    }
]

const StartedBoxWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-constent:center;    
    width: 90%;
    margin: 0 auto;
    max-width: 800px;
`;
const StartedBox = styled.div`
    flex: 0 0 47%;
    max-width:47%;
    margin:1.5%;
    padding:16px;
    border-radius:10px;
    box-shadow:0px 0px 10px -5px #464766;
    box-sizing:border-box;
    ${props => props.type2 && css`
        padding:16px 24px;
    `}
`; 
const StartTitle = styled.h3`
    font-size:30px;
    margin:18px 0 12px;
`;
const StartP = styled.p`
    min-height:46px;
    margin-bottom:40px;
    font-size:16px;
    font-weight:600;
`;
const StartPSapn = styled.span`
    font-size:16px;
    ${props => props.price && css`
        font-size:26px;
    `}
`;
class Started extends Component{
    render(){
        return(
            <StartedBoxWrap>
                {starteds.map((started,index)=>{
                    return <StartedBoxs title={started.title} text={started.text} price={started.price} 
                    // startedList={started.startedList} 
                    type={started.type} key={index}/>
                })}
            </StartedBoxWrap>
        )
    }
}

const testList =[
    "Cloud Editor + Hosting",
    "Unlimited Seats",
    "World Tracking (SLAM)",
    "Image Targets"

]
const Litext = styled.li`
    padding-left:35px;
    margin-bottom:6px;
    line-height:32px;
    background:url(${listCheck}) 0 0 no-repeat;
    background-size:30px 30px;
`;
class StartedBoxs extends Component{
    render(){
        return(
            <StartedBox>
                <StartTitle>{this.props.title}</StartTitle>
                <StartP text>{this.props.text}</StartP>
                <StartP>
                    <StartPSapn price>{this.props.price} </StartPSapn>
                    <StartPSapn>month for your team</StartPSapn>
                </StartP>
                <ul>
                    {testList.map((testList,index)=>{
                        return <Litext key={index}>{testList}</Litext>
                    })}
                    
                </ul>
            </StartedBox>
        )
    }
}
export default Pricing;