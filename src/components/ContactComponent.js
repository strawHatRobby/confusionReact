import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => !(val) || (val.length >= len)
const isANumber = (val) => !isNaN(Number(val))
const isAValidEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.]+\.[A-Za-z]{2,4}$/i.test(val)


export default class Contact extends Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(values){
    console.log("Current State is: " + JSON.stringify(this.values))
    alert("Current State is: " + JSON.stringify(this.values));
  }


  render(){
    return(
        <div className="container">
              <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem>Contact Us</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-content">
              <div className="col-12">
                  <h3>Send us your Feedback</h3>
              </div>
              <div className="col-12 col-md-9">
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={2} >First Name</Label>
                          <Col md={10}>
                              <Control.text model=".firstname" id="firstname" name="firstname"
                                className="form-control"
                                placeholder="First Name"
                                validators={{
                                    required, minLength: minLength(3),
                                    maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                  className="text-danger"
                                  model=".firstname"
                                  show="touched"
                                  messages={{
                                    require: "First name is required",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be less than 15 characters",
                                  }}
                                />
                          </Col>
                  </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" md={2} >Last Name</Label>
                        <Col md={10}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                              className="form-control"
                              placeholder="Last Name"
                              validators={{
                                  required, minLength: minLength(3),
                                  maxLength: maxLength(15)
                              }}
                              />
                              <Errors
                                  className="text-danger"
                                  model=".lastname"
                                  show="touched"
                                  messages={{
                                    require: "Last name is required",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be less than 15 characters",
                                  }}
                                />
                        </Col>
                  </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" md={2} >Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email"
                              className="form-control"
                              placeholder="email"
                              validators={{
                                  required, minLength: minLength(3),
                                  maxLength: maxLength(15),
                                  isAValidEmail
                              }}
                              />
                              <Errors
                                  className="text-danger"
                                  model=".email"
                                  show="touched"
                                  messages={{
                                    require: "Email is required",
                                    maxLength: "Must be less than 15 characters",
                                    isAValidEmail: "must be of the form alphNum@alphNum.alphaNum"
                                  }}
                                />
                        </Col>
                  </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" md={2} >Telephone</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telephone" name="telnum"
                              className="form-control"
                              placeholder="Telephone"
                              validators={{
                                  required, minLength: minLength(3),
                                  maxLength: maxLength(15),
                                  isANumber
                              }}
                              />
                              <Errors
                                  className="text-danger"
                                  model=".telnum"
                                  show="touched"
                                  messages={{
                                    require: "Telephone number is Required",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be less than 15 characters",
                                    isANumber: "Telephone Number must only contain numbers"
                                  }}
                                />
                        </Col>
                </Row>
                  <Row className="form-group">
                        <Label htmlFor="feedback" md={2} >Your Feedback</Label>
                        <Col md={{size: 10}}>
                            <Control.textarea model=".message" id="message" name="message"
                              className="form-control"
                              placeholder="Type you Feedback"
                              rows="10"
                              validators={{
                                  required, minLength: minLength(5),
                                  maxLength: maxLength(300),
                              }}
                              />
                              <Errors
                                  className="text-danger"
                                  model=".telnum"
                                  show="touched"
                                  messages={{
                                    require: "Required",
                                    show:"touched",
                                    minLength: "Must be greater than 5 characters",
                                    maxLength: "You have reached the maximum number of characters",
                                  }}
                                />
                        </Col>
                  </Row>
                    <Row className="form-group">
                      <Col md={{size:6, offset: 2}}>
                            <Label check>
                              <Control.checkbox model=".agree" name="agree"
                              className="form-control"
                              isToggle={true}
                              />
                              <strong>May we contact you?</strong>
                            </Label>

                      </Col>
                      <Col md={{size:3, offset: 1}}>
                        <Control.select model=".contactType" name="contactType"
                          className="form-control"
                         >
                              <option value="Tel.">Tel.</option>
                              <option value="Email">Email</option>
                        </Control.select>
                      </Col>
                  </Row>
                    <Row className="form-group">
                      <Col md={{size:10, offset: 2}}>
                          <Button type="submit" color="primary" >
                            Submit
                          </Button>
                      </Col>
                  </Row>
                  </LocalForm>
              </div>
            </div>

        </div>
    );
  }
}
