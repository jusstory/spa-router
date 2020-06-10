import React , { Component, Fragment } from 'react';
// import propTypes from 'prop-types';

class videos extends Component{

    // static propTypes = {
    //     title: propTypes.string.isRequired,
    //     text: propTypes.string.isRequired,
    //     link: propTypes.string.isRequired
    // }

    render(){
        return(
            <div>
                {this.props.direction == 'left' &&
                    <Video link={this.props.link}/>
                }
                <VideoText title={this.props.title} text={this.props.text} />
                {this.props.direction == 'right' &&
                    <Video link={this.props.link}/>
                }
            </div>
        )
    }
}
class videosL extends Component{

    render(){
        return(
            <div>
                <Video link={this.props.link}/>
                <VideoText title={this.props.title} text={this.props.text} />
            </div>
        )
    }
}
class videosR extends Component{

    render(){
        return(
            <div>
                <VideoText title={this.props.title} text={this.props.text} />
                <Video link={this.props.link}/>
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