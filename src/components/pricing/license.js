import React, { Component } from 'react';

class License extends Component {
    render(){
        return(
            <div className="licenseBox">
                <img src={this.props.imgLink} alt="license" />
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <LicenseList  priceM={this.props.priceM} includedV={this.props.includedV} priceV={this.props.priceV}/>
            </div>
        )
    }
}

class LicenseList extends Component{
    render(){
        return(
            <ul className="licenseList">
                <li>
                    <span className="bold">{this.props.priceM}</span>
                    <span className="subTxt"> / mounth</span>
                </li>
                <li>{this.props.includedV}</li>
                <li>
                    <span className="bold">{this.props.priceV}</span>
                    <span className="subTxt"> / view</span>
                </li>
            </ul>
        )
    }
}

export default License;