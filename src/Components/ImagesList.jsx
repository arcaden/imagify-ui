import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import ImageCard from './ImageCard'
import ToolBar from './ToolBar'
import {getImages} from '../actions/actions'
import CreateImageModal from "./CreateImageModal";

function ImagesList(props) {

  useEffect(() => {
    props.dispatch(getImages());
  }, []);
  
  let cards = props.images.map((image) => {
    return (
      <Row className="justify-content-md-center" style={{marginTop: '15px'}}>
        <Col lg="4">
          <ImageCard title={image.title} description={image.description} file={image.img_url} tags={image.tags} />
        </Col>
      </Row>)
  })
  return (
    <Container fluid>
      <ToolBar />
      <CreateImageModal />
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
