import React from 'react'
import {Card, Button} from 'react-bootstrap'


function ImageCard(props) {
    return (
    <Card style={{ margin: 'auto'}}>
    <Card.Img variant="top" src={`${props.img}`} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
          {props.description}      
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default ImageCard;
