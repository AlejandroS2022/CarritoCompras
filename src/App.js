import React, { useState } from "react";
import "./style/style.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Tienda from "./components/Tienda";
import Error404 from "./components/Error404";
import Carrito from "./components/Carrito";
import Factura from "./components/Factura";
import { Contenedor, Menu } from "./style/styled-component";

const App = () => {
    return (
        <Contenedor>
            <Menu>
                <NavLink to="/"> Inicio</NavLink>
                <NavLink to="/tienda"> Tienda</NavLink>
            </Menu>
            <main>
                <Routes>
                    <Route exact path="/" element={<Inicio/>} />
                    <Route path="/tienda" element={<Tienda/>} />
                    <Route exact path="/factura" element={<Factura/>} />
                    <Route element={<Error404/>} /> 
                </Routes>
            </main>
            <aside>
                <Carrito />
            </aside>
        </Contenedor>
    );
}

export default (App);