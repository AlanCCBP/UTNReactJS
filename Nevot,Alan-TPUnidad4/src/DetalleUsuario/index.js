import React, { Component } from "react";
import Page from "./Page";

class DetalleUSuario extends Component {
  constructor(props) {
    super(props);

    /* Estado */
    this.state = {
      usuario: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ usuario: data }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const usuario = this.state.usuario;
    return (
      <Page
        name={usuario.name}
        email={usuario.email}
        username={usuario.username}
      />
    );
  }
}

export default DetalleUSuario;
