import React, { Component } from 'react';
import { Media  } from 'reactstrap';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle,  CardText } from 'reactstrap';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedDish:null,
        // change this when a dish is electe to hsow its detail
    }
  }

    onDishSelected(dish) {
        this.setState({selectedDish: dish})
    }

    renderDish(dish){
        if(dish){
          return(
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          )
        }
        return(
          <div></div>
        );
    }
  render(){
      const menu = this.props.dishes.map((dish) =>  {
          return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
              <Card onClick={() => this.onDishSelected(dish)}>
              {/*This just changes the state*/}
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
              </Card>
              </div>
          );
      });
    return (
      <div className="container">
        <div className="row">
        {/*needToCall the function here for rendering*/}
          {this.renderDish(this.state.selectedDish)}
        </div>
        <div className="row">
          {menu}
        </div>
        </div>

    )
  }

}

export default Menu;
