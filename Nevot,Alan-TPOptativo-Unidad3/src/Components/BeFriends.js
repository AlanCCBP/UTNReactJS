import React from 'react';
import Button from 'react-bootstrap/Button';

class BeFriends extends React.Component{

    render(){

        return(
            <Button
                variant={this.props.variant}
                onClick={this.props.onClick}
            >{this.props.value}
            </Button>
        )
    }
}

export default BeFriends;