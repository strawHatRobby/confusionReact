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
  Button,
  Form, FormGroup, Input, Label,
  Modal, ModalHeader, ModalBody
} from 'reactstrap';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
        isNavOpen: false,
        isModalOpen: false

    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    this.toggleModal();
    console.log("username " + this.username.value + " has password " + this.password.value);
    alert("username " + this.username.value + " has password " + this.password.value);
    event.preventDefault();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });

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
                <span className="fa fa-list fa-lg"></span>
                            Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contactus">
                <span className="fa fa-address-card fa-lg"></span>
                          Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-link" onClick={this.toggleModal}>
                <span className="fa fa-sign-in fa-lg"></span>
                  Login
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
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModa}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup row>
              <Col md={10}>
                <Label htmlFor="username">username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input}
                />
                </Col>
              </FormGroup>
              <FormGroup row>
              <Col md={10}>
                <Label htmlFor="password">password</Label>
                <Input type="password" id="password" name="password"
                innerRef={(input) => this.password = input}
                 />
                </Col>
              </FormGroup>
              <FormGroup check>
              <Col md={10}>
              <Input type="checkbox" id="remember_me" name="remember_me"
              innerRef={(input) => this.remember_me = input}
              />
                <Label htmlFor="remember_me">remember me</Label>
                </Col>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
              Login
              </Button>
            </Form>
        </ModalBody>
      </Modal>
      </React.Fragment>
    )
  }

}

export default Header;
