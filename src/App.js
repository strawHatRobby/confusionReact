import React, { Component } from 'react';
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
    }
    }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Menu dishes={this.state.dishes}></Menu>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
