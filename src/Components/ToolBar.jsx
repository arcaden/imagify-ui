import React from 'react'
import { connect } from 'react-redux'
import { setSearchBy, setSearchValue, search, getImages, getPersonal, toggleCreateModal } from '../actions/actions'
import { Navbar, Form, Button, FormControl, Nav, NavDropdown } from 'react-bootstrap'


function ToolBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => {
                props.getImages()
            }}> Imagify</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => {
                    props.toggleCreateModal(true)
                }}>  Upload </Nav.Link>
                <Nav.Link onClick={() => {
                    props.getPersonal()
                }}> Your pictures </Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" value={props.search_value} onChange={
                    (e) => {
                        props.setSearchValue(e.target.value)
                    }
                } />
                <Button variant="outline-info" onClick={() => {
                    console.log(props.search_value)
                    props.search(
                        props.search_by,
                        props.search_value
                    )
                }}>Search</Button>
            </Form>
            <Nav>
                <NavDropdown title={`search by ${props.search_by}`} id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={() => props.setSearchBy('title')}> Title </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => props.setSearchBy('tags')}> Tags </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar >
    )
}

function mapStateToProps(state, ownProps) {
    return {
        search_value: state.search.search_value,
        search_by: state.search.search_by,
        showCreate: state.showCreate
    }
}

export default connect(mapStateToProps, { setSearchValue, setSearchBy, search, getImages, getPersonal, toggleCreateModal })(ToolBar);





