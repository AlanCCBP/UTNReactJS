import React from 'react';
import Input from './Input';

const Formulario = () => (
    <form>
        <label>Nombre:</label>
        <Input
            name="firstName"
            type="text"
        />
        <label>Apellido:</label>
        <Input
            name="lastName"
            type="text"
        />
        <label>E-Mail:</label>
        <Input
            name="eMail"
            type="email"
        />
        <label>Teléfono:</label>
        <Input
            name="phone"
            type="number"
        />
        <label>Password:</label>
        <Input
            name="pass"
            type="password"
        />
        <label>Confirmar Password:</label>
        <Input
            name="passConf"
            type="password"
        />
        <Input
            id="submit-button"
            name="register"
            type="submit"
            value="Registrarme!"
        />
    </form>
);

export default Formulario;