import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}){
  return(
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>

        </CardBody>
      </Card>
  );

}

export default function Home(props){
    return(
        <div className="container">
        <h4 className="m-5">Welcome to Restorante Con Fusion</h4>
        <div className="row align-items-start m-4">


            <div className="col-12 col-md m1">
              <RenderCard item={props.promotion} />
            </div>
            <div className="col-12 col-md m1">
              <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m1">
              <RenderCard item={props.leader} />
            </div>



        </div>

        </div>
    );
}
