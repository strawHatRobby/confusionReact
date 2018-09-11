import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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

    }
  }

  render(){
    return (
      <React.Fragment>
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Confusion</NavbarBrand>
        </div>
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
