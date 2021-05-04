import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import ImageCard from './ImageCard'

function ImagesList(props) {

  let cards = props.images.map((image) => {
    return (
      <Row>
        <Col>
          <ImageCard title={image.title} description={image.description} file={image.file} tags={image.tags} />
        </Col>
      </Row>)
  })
  return (
    <Container>
      {cards}
    </Container>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps, null)(ImagesList);
