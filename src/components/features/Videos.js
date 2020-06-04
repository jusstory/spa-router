import React , { Component, Fragment } from 'react';
import propTypes from 'prop-types';

class videos extends Component{

    static propTypes = {
        title: propTypes.string,
        text: propTypes.string,
        link: propTypes.string
    }

    render(){
        return(
            <div>
                <Video link={this.props.link}/>
                <VideoText title={this.props.title} text={this.props.text} />
            </div>
        )
    }
}

class Video extends Component{
    render(){
        return(
            <video className="featuresVideo" autoPlay loop muted playsInline>
                <source src={this.props.link} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
        )
    }
}

class VideoText extends Component{
    render(){
        return(
            <div className="featuresVideoTxt">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default videos;