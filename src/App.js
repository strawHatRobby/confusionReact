import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/HomeComponent';
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';

import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {
    constructor(props){
        super(props);
        {

        };
    }
  render() {


    const HomePage = () => {
      return (
        <Home
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )

    }


    return (
      <Provider store={store}>

      <BrowserRouter>
      <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />

            <Route exact path="/contactus" component={Contact} />
        </Switch>
        <Footer/>
      </React.Fragment>
      </BrowserRouter>
      
      </Provider>
    );
  }
}

export default App;
