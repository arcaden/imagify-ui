import React from 'react'
import {Card} from 'react-bootstrap'


function ImageCard(props) {
  let tagline = ''
  props.tags.forEach((tag) => {
    tagline += `#${tag} `
  })
    return (
    <Card style={{ margin: 'auto'}} bg={'dark'} text={'white'} style={{maxWidth: '600', maxHeight: '600'}}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
          {props.description}      
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={'https://shopify-images-backend.herokuapp.com/' + props.file} />
    <Card.Footer>
      <small className="text-muted">{tagline}</small>
    </Card.Footer>
  </Card>
  )
}

export default ImageCard;
