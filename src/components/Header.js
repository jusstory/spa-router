import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


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
            <header id="header">
                <h1 className="logo"><a href="/">8thwall</a></h1>
                <nav className={ this.state.isToggleOn ? 'nav' : 'nav active' }>
                    <ul>
                        <li><NavLink to="/Features" activeClassName="active" onClick={this.handleClick}>Features</NavLink></li>
                        <li><NavLink to="/pricing" activeClassName="active" onClick={this.handleClick}>Pricing</NavLink></li>
                    </ul>
                    <button className="login_btn">login</button>
                </nav>
                <button onClick={this.handleClick} className="navbar">{this.state.isToggleOn ? 'mobile nav OFF' : 'mobile nav ON'}</button>
            </header>
        );
    }
}

export default Menu;