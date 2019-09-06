import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import City from './City';
import BeFriends from './BeFriends';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

class ProfileHome extends React.Component{

  constructor (props){
    super(props);

    this.state = {
      user: {},
      areFriendsText: "Follow",
      variant: "success",
      isLoaded: false
    }
  }

  handleToggleAddFriend(){

    this.setState(
      {
        areFriendsText: "Unfollow",
        variant: "danger"
      }
    )
  }

  componentDidMount(){

    let apiRequest = "https://jsonplaceholder.typicode.com/users/" + this.props.match.params.userid;

    fetch(apiRequest)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                user: result
            })
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        }
    )
  }

  render () {

    let userInfo = this.state.user;

    if (this.state.isLoaded === true){
      return (
        <Container>
          <Row>
            <ProfilePhoto></ProfilePhoto>
          </Row>
          <Row>
            <Col md={{span: 4}} className="justify-content-start">
              <h3>{userInfo.username}</h3>
            <City
                location={userInfo.address.city}
              ></City>
            </Col>
            <Col md={{span: 1, offset: 6}} className="justify-content-center">
              <BeFriends
                variant={this.state.variant}
                onClick={this.handleToggleAddFriend.bind(this)}
                value={this.state.areFriendsText}
              ></BeFriends>
            </Col>
          </Row>
          <Row>

          </Row>
          <Row>
            <p>
              <br/>
              Hi, my name is <strong>{userInfo.name}</strong>, and i live in <strong>{userInfo.address.street}</strong>.<br/>
              If you keep in touch with me, my cellphone number is <strong>{userInfo.phone}</strong>, or you can send me an email to <strong>{userInfo.email}</strong>.<br/>
              You can check my portfolio entering to <strong>{userInfo.website}</strong>. I'm very proud about it.<br/>
              I'm being a part of a great team at <strong>{userInfo.company.name}</strong>, and i'm working on <strong>{userInfo.company.bs}</strong>.<br/><br/>
              Thanks for reading!
            </p>
          </Row>
          <Row>
            <Col md={{span: 4, offset: 3}}>
              <Link to={'/'}>Go back home and see the rest of the team...</Link>
            </Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <div>
          <h3>Loading user info...</h3>
        </div>
      )
    }
  };
}

export default ProfileHome;
