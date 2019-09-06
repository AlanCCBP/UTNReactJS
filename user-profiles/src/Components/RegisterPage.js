import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import {Redirect} from 'react-router-dom';
import './Profile.css';

class RegisterPage extends React.Component{

    constructor(props){
        super(props)

        this.state={
            username: '',
            password: '',
            valid: false
        }
    }

    handleRegisterClick(e){

        if(this.state.username != "unusuario" ||
            this.state.password != ""){
            this.props.history.push('/home');
        }
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

        if(this.state.valid){
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
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder=""/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control type="e-mail" placeholder="example@domain.com"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicUsername">
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
                                        <Col md={{span: 3, offset: 4}}>
                                            <Button variant="success" type="submit" onClick={this.handleRegisterClick.bind(this)}>
                                                Register
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

export default RegisterPage;