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
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
        <div class="container">
        <NavbarBrand href="/">Confusion</NavbarBrand>
        </div>
        </Navbar>
        <h1>Kamikaze Biatch!</h1>
      </div>
    );
  }
}

export default App;
