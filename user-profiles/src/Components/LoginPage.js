import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import {Redirect} from 'react-router-dom';
import './Profile.css';

class LoginPage extends React.Component{

    constructor(props){
        super(props)

        this.state={
            username: '',
            password: '',
            isAuthenticated: false
        }
    }

    handleLoginClick(e){

        if(this.state.username === "unusuario" &&
            this.state.password === "noseladigasanadie"){

            this.setState({
                isAuthenticated: true
            })
        } else {
            this.setState({
                isAuthenticated: false
            })
        }
    }

    handleRegisterClick(e){

        this.props.history.push('/register');

    }

    handleUsernameValueChange(e){

        this.setState({
            username: e.target.value
        })
    }

    handlePasswordValueChange(e){

        this.setState({
            password: e.target.value
        })
    }

    render(){

        if(this.state.isAuthenticated){
            return(
                <Redirect to={'/home'}/>
            )
        } else {
            return(
                <Container>
                    <Row>
                        <h3 id="login-form-title">Sign in to meet our team.</h3>
                        <Col md={{span: 4, offset: 4}} className="justify-content-center">
                            <Form id="login-form">
                                <Form.Group controlId="formBasicUser">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your username" onChange={e => this.handleUsernameValueChange(e)}/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={e => this.handlePasswordValueChange(e)}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicControls">
                                    <Row>
                                        <Col md={{span: 4, offset: 2}}>
                                            <Button variant="primary" type="submit" onClick={this.handleRegisterClick.bind(this)}>
                                                Register
                                            </Button>
                                        </Col>
                                        <Col md={{span: 4, offset: 1}}>
                                            <Button variant="success" type="submit" onClick={this.handleLoginClick.bind(this)}>
                                                Sign In
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default LoginPage;