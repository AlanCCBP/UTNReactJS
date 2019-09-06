import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";

/* Componente presentacional */
const NavbarPage = () => (
  <Navbar bg="dark" variant="dark">
    <NavbarBrand>my-APP</NavbarBrand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/usuarios">Lista de Usuarios</Nav.Link>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
    </Nav>
  </Navbar>
);
export default NavbarPage;
