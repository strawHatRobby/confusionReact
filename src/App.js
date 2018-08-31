import React, { Component } from 'react';
import Menu from './components/MenuComponent'
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
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Confusion</NavbarBrand>
        </div>
        </Navbar>
        <h1>Kamikaze Biatch!</h1>
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
