import React from 'react';
import ProfileCardContent from './ProfileCardContent';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';

class ProfilesList extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    users: result
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

    render(){

        const {error, isLoaded, users} = this.state
        let userProfId = 0

        if(error){
            return(<div><h3>Error: {error.message}</h3></div>)
        } else if(!isLoaded){
            return(<div><h3>Loading...</h3></div>)
        } else {
            return(
                <Row>
                    <CardColumns>
                        {users.map(
                            aUser => <ProfileCardContent key={userProfId = userProfId + 1} userInfo = {aUser}/>
                        )}
                    </CardColumns>
                </Row>
            )
        }
    }
}
export default ProfilesList;