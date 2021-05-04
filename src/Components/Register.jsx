import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { register } from "../actions/actions"
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"
import { renderRedirect } from '../util/utils'

const Register = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
        {renderRedirect}
        <Form style={{ width: '50%', margin: 'auto' }}>
            <h2>Sign Up </h2>
            <hr />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="button"
                onClick={() => {
                    if (email && password) {
                        props.register({ email, password })
                    } else {
                        toast.error("email and password cant be blank!")
                    }
                }
                }
            >
                Register
            </Button>
        </Form>
        <Link to="/login"> Or ... click here to login </Link>
        </div>
    );
};

function mapStateToProps(state, ownProps) {
    return {
      user: state.current_user
    }
  }
  

export default connect(mapStateToProps, { register })(Register);
