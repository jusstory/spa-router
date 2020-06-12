import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'img/logo.png'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:95%;
    height:100px;
    margin:0 auto;
    box-sizing:border-box;
    padding:10px;
    @media screen and (max-width: 768px){
        display: block;
        position: relative;
        height: auto;
        padding: 0 2.5%;
        margin:0 auto;
        background: #fff;
        background-color: #f8f9fa;
    }
`;
const Logo = styled.h1`
    width:144px;
    height:80px;
    @media screen and (max-width: 768px){
        position: absolute;
        top: 10px;left:7.5%;
    }
    & > a {
        display:block;
        width:100%;
        height:100%;
        font-sizE:0;
        background:url(${logo}) 50% 50% no-repeat;
        background-size:contain;
        @media screen and (max-width: 768px){
            background-position:calc(50% - 17px) 50%;
        }
      }
`;


class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn:!state.isToggleOn
        }))
    }
    render(){
        return (
            <Header id="header">
                <Logo><a href="/">8thwall</a></Logo>
                <nav className={ this.state.isToggleOn ? 'nav' : 'nav active' }>
                    <ul>
                        <li><NavLink to="/Features" activeClassName="active" onClick={this.handleClick}>Features</NavLink></li>
                        <li><NavLink to="/pricing" activeClassName="active" onClick={this.handleClick}>Pricing</NavLink></li>
                    </ul>
                    <button className="login_btn">login</button>
                </nav>
                <button onClick={this.handleClick} className="navbar">{this.state.isToggleOn ? 'mobile nav OFF' : 'mobile nav ON'}</button>
            </Header>
        );
    }
}

export default Menu;