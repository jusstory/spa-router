import React , { Component } from 'react';
import Videos from 'components/features/Videos';
import features from 'img/img_Features.png';


const videos =[
    {
        link: "https://www.8thwall.com/static/web/static/engine-world-tracking-for-web-40262854bd9b1f42b38c6c2c187e225b.mp4",
        title: "World Tracking",
        text: "Built entirely using standards-compliant JavaScript and WebGL, 8th Wall’s Simultaneous Localization and Mapping (SLAM) engine is hyper-optimized for real-time AR on mobile browsers. Features include Six Degrees of Freedom (6-DoF), Lighting estimation, instant surface detection and responsive scale."
        ,direction:'left'
    },
    {
        link: "https://www.8thwall.com/static/web/static/face-effects-for-web-f1233ad00b75bf50b511ce44afca5c72.mp4",
        title: "Face Effects",
        text: "Create high quality face filters that utilize the full power of the open web and work everywhere. Anchor 3D objects such as glasses or jewelry to a variety of face attachment points. Render a face mesh instantly with our easy-to-use component library or design custom visual effects with shaders, materials and video. 8th Wall Face Effects can be experienced across all devices including mobile phones, tablets and desktops with no app required!"
        ,direction:'right'
    }
]

class Features extends  Component {
    // state = {
    //     videos : [
    //         {
    //             link: "https://www.8thwall.com/img/vids/engine-features/engine-world-tracking-for-web.mp4",
    //             title: "World Tracking",
    //             text: "Built entirely using standards-compliant JavaScript and WebGL, 8th Wall’s Simultaneous Localization and Mapping (SLAM) engine is hyper-optimized for real-time AR on mobile browsers. Features include Six Degrees of Freedom (6-DoF), Lighting estimation, instant surface detection and responsive scale."
    //             ,direction:'left'
    //         },
    //         {
    //             link: "https://www.8thwall.com/img/vids/engine-features/face-effects-for-web.mp4",
    //             title: "Face Effects",
    //             text: "Create high quality face filters that utilize the full power of the open web and work everywhere. Anchor 3D objects such as glasses or jewelry to a variety of face attachment points. Render a face mesh instantly with our easy-to-use component library or design custom visual effects with shaders, materials and video. 8th Wall Face Effects can be experienced across all devices including mobile phones, tablets and desktops with no app required!"
    //             ,direction:'right'
    //         }
    //     ]
    // }
    render(){
        return (
            <div className="subpage">
                <div className="container">
                    <h2 className="subpage_tit">Features</h2>
                    <p className="subpage_txt">Use 8th Wall to build immersive WebAR experiences that work on every mobile device. No app required.</p>
                    <img src={features} alt="features sample"/>

                    {videos.map((video, index) =>{
                            return <Videos link={video.link} title={video.title} text={video.text} direction={video.direction} key={index} />
                    })}
                </div>
            </div>
        )
    }
}


export default Features;