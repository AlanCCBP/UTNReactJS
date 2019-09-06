import React from 'react';
import ProfilesList from './Components/ProfilesList';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './App.css';

function App() {
  return (
    <Container className="App">
      <Jumbotron fluid>
        <h1>Meet my development team.</h1>
        <p>
          <cite>“Innovation distinguishes between a leader and a follower.”</cite>
        </p>
        <small className="text-muted">
          <cite>Steve Jobs.</cite>
        </small>
      </Jumbotron>
      <ProfilesList/>
    </Container>
  );
}

export default App;