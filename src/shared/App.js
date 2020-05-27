import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Features, Pricing } from 'pages';
import Header from 'components/Header';
import Footer from 'components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/features" component={Features}/>
                <Route path="/pricing" component={Pricing}/>
                
                <Footer/>
            </div>
        );
    }
}

export default App;