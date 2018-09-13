import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';

import logo from '../logo.svg';
import '../App.css';


import { connect } from 'react-redux';

import { addComment } from '../redux/actions/commentActions';


const mapStateToProps = dispatch => {
      return {
        dishes: dispatch.dishes,
        addComment: (dishId, rating, author, comment ) => dispatch(addComment(dishId, rating, author, comment)),
        promotions: dispatch.promotions,
        leaders: dispatch.leaders,
      }
}

class MainComponent extends Component {
    constructor(props){
        super(props);
        {

        };
    }
  render() {


    const HomePage = () => {
      return (
        <Home
            dish={this.props.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
            leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }


    return (

      <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />

            <Route exact path="/contactus" component={Contact} />
        </Switch>
        <Footer/>
      </React.Fragment>

    );
  }
}

export default withRouter(connect(mapStateToProps)(MainComponent));
