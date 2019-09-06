import React from 'react';
import ProfilesList from './Components/ProfilesList';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link} from 'react-router-dom';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {

  render(){
    return (
      <Container className="App">
        <Row>
          <Col md={{span: 10, offset: 1}}>
            <Jumbotron fluid>
              <h1>Meet my development team.</h1>
              <p>
                <cite>“Innovation distinguishes between a leader and a follower.”</cite>
              </p>
              <small className="text-muted">
                <cite>Steve Jobs.</cite>
              </small>
            </Jumbotron>
          </Col>
          <Col md={{span: 1}}>
            <Link to={'/'}><h5>Bye!</h5></Link>
          </Col>
        </Row>
        <ProfilesList/>
      </Container>
    );
  }
}

export default App;