import React, { Fragment } from "react";

const Page = ({ name, email, username }) => (
  <Fragment>
    <h1>Detalle Usuario</h1>

    <h5>{name}</h5>
    <h5>{email}</h5>
    <h5>{username}</h5>
  </Fragment>
);

export default Page;
