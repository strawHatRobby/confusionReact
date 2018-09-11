import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
        isNavOpen: false

    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render(){
    return (
      <React.Fragment>
      <Navbar dark color="primary" expand="md">
        <div className="container">
        <NavbarToggler onClick={this.toggleNav} />
        <NavbarBrand className="mr-auto" href="/">
          <img src="assets/images/logo.png" height="30" width="41"
          alt="Ristorante Con Fusion" />
          Con Fusion
        </NavbarBrand>
        </div>


        <Collapse navbar isOpen={this.state.isNavOpen}>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" exact to="/">
                <span className="fa fa-home fa-lg"></span> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                <span className="fa fa-info fa-lg"></span> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/menu">
                <span className="fa fa-list fa-lg"></span> Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contactus">
                <span className="fa fa-address-card fa-lg"></span> Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>


      </Navbar>

      <Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
                <h1>Restorante Con Fusion</h1>
                <p>New take at old food, something you wont find anywhere else. There is something new and something old for everyone </p>
            </div>
          </div>
        </div>
      </Jumbotron>
      </React.Fragment>
    )
  }

}

export default Header;
