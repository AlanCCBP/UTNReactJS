import React from 'react';

class Input extends React.Component {

    render(){
        return (
            <input id={this.props.id}
                    className='field'
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
            ></input>
        )
    }
}

export default Input;