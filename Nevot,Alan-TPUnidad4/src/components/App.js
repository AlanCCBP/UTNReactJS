import React from "react";
import "./styles/App.css";
import ListaUsuarios from "../containers/ListaUsuarios";
import Home from "./HomePage";
import Contacto from "../containers/Contacto";
import Navbar from "./NavbarPage";
import DetalleUsuario from "../DetalleUsuario";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

/* Componente Presentacional */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usuarios">Lista de Usuarios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </nav> */}
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/usuarios/:id" component={DetalleUsuario} />
          <Route path="/usuarios" component={ListaUsuarios} />
          <Route path="/contacto" component={Contacto} />
          <Redirect from="" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
