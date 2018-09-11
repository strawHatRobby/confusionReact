import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/HomeComponent';
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import logo from './logo.svg';
import './App.css';

import { DISHES } from './shared/dishes'

class App extends Component {
    constructor(props){
        super(props);
        {
        this.state = {dishes: DISHES,}
        };
    }
  render() {
    const HomePage = () => {
      return (
        <Home />
      )

    }
    return (
      <BrowserRouter>
      <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
        </Switch>
        <Footer/>
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
