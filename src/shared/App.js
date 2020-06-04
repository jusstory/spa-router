import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Features, Pricing, NotFound } from 'pages';
import Header from 'components/inc/Header';
import Footer from 'components/inc/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/features" component={Features}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route component={NotFound} />
                </Switch>
                <Footer/>
                </div>
        );
    }
}

export default App;