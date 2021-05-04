import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { login } from "../actions/actions"
import { Link } from "react-router-dom"
import { renderRedirect } from '../util/utils'

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
    {renderRedirect(props.user)}
    <Form style={{width: '50%', margin: 'auto'}}>
      <h2>Login</h2>
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
        onClick={() =>
          props.login({email, password})
        }
      >
        Login
      </Button>
    </Form>
    <Link to="/signup"> Or ... click here to signup </Link>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.current_user
  }
}



export default connect(mapStateToProps, { login })(Login);
