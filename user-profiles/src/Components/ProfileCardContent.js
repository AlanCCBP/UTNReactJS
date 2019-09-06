import React from 'react';
import Card from 'react-bootstrap/Card';
import userImage from '../resources/images/man.svg';
import {Link} from 'react-router-dom';

class ProfileCardContent extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        let cardId = 0

        return(
            <Card style={{width: '20rem'}} key={cardId = cardId + 1}>
                <Card.Img variant="top" src={userImage} style={{width: '5rem', height: '5rem'}}/>
                <Card.Body>
                    <Link to={'/profile/' + this.props.userInfo.id}><Card.Title className="username">{this.props.userInfo.username}</Card.Title></Link>
                    <Card.Text>
                        <strong>{this.props.userInfo.name}</strong><br/>
                        {this.props.userInfo.email}<br/>
                        <small className="text-muted">
                            {this.props.userInfo.address.street} <cite>{this.props.userInfo.address.suite}</cite>
                        </small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">From {this.props.userInfo.address.city}</Card.Footer>
            </Card>
        )
    }
}
export default ProfileCardContent;