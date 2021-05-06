import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Button, Col } from 'react-bootstrap'
import { createImage, toggleCreateModal } from '../actions/actions'
import { toast } from 'react-toastify';

class CreateImageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            file: null,
            public_view: true
        };
        this.fileOnChangeHandler = this.fileOnChangeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.formChangeHandler = this.formChangeHandler.bind(this)
        this.checkChangeHandler = this.checkChangeHandler.bind(this)
    }

    handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (this.state.title === '') {
            toast.error("You must have a title for the image")
        } else if (!this.state.file) {
            toast.error("You must upload an image")
        } else {
            this.props.createImage({
                title: this.state.title,
                description: this.state.description,
                img_file: this.state.file,
                public_view: this.state.public_view
            })
            this.props.toggleCreateModal(false)
            this.setState({
                title: '',
                description: '',
                file: null,
                public_view: true
            })
        }
    };

    formChangeHandler(event) {
        var key = event.target.name;
        var value = event.target.value;
        var obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    checkChangeHandler(event) {
        this.setState({
            public_view: !this.state.public_view
        });
    }

    fileOnChangeHandler = (event) => {
        const uploaded = event.target.files[0];
        this.setState({
            file: uploaded
        });
    }

    render() {
        return (
            <Modal
                size='lg'
                show={this.props.showModal}
                onHide={() => this.props.toggleCreateModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Upload a new picture
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate onSubmit={this.handleSubmit}>
                        <Form.Group as={Col} md="12">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.formChangeHandler}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="8">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3} name="description"
                                value={this.state.description}
                                onChange={this.formChangeHandler}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.File >
                                <input type='file' onChange={this.fileOnChangeHandler} />
                                <Form.File.Label>Image File</Form.File.Label>
                            </Form.File>
                        </Form.Group>
                        <Form.Group style={{ marginLeft: '15px' }}>
                            <Form.Check
                                name="public_view"
                                label="Public image"
                                checked={this.state.public_view}
                                onChange={this.checkChangeHandler}
                                style={{ marginTop: '15px', marginBottom: '15px' }}
                            />
                            <Button type="submit">Upload</Button>
                        </Form.Group>

                    </Form>
                </Modal.Body>
            </Modal>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        showModal: state.showCreate,
    }
}


export default connect(mapStateToProps, { createImage, toggleCreateModal })(CreateImageModal);

