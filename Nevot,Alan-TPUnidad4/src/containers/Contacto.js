import React, { Component, Fragment } from "react";

class Contacto extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      apellido: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  handleChange(event) {
    var target = event.target;
    var name = target["name"];
    console.log(name);
    this.setState({
      [name]: target.value
    });
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Introduzca nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              placeholder="Introduzca apellido"
              name="apellido"
              value={this.state.apellido}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Introduzca email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    );
  }
}
export default Contacto;
