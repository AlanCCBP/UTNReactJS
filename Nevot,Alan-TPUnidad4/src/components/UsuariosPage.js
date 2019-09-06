import React, { Fragment } from "react";
import UsuarioPage from "./UsuarioPage";
import Table from "react-bootstrap/Table";
import HeaderPage from "./HeaderPage";

/* Componente presentacional */
const UsuariosPage = ({ usuarios }) => {
  return (
    <Fragment>
      <HeaderPage />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => {
            // return <li>{user}</li>;
            return <UsuarioPage key={index} {...usuario} />;
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};
export default UsuariosPage;
