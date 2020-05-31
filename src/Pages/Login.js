import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../store/actions/userActions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: '',
    pass: ''
  }
  handleChange = (e) => {
    console.log(e.target.id)
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.login(this.state) 
  }
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="pass">
    <Form.Label>Пароль</Form.Label>
    <Form.Control type="password" placeholder="Пароль" onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit">
  Войти
  </Button>
</Form>
      </div>
    )
  }
}
const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
