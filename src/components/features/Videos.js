import React , { Component, Fragment } from 'react';

class videos extends Component{
    render(){
        return(
            <Fragment>
                <Video link={this.props.link}/>
                <VideoText title={this.props.title} text={this.props.text} />
            </Fragment>
        )
    }
}

class Video extends Component{
    render(){
        console.log(this.props);
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
        console.log(this.props);
        return(
            <div className="featuresVideoTxt">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default videos;