import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Producto, NombreProducto, BotonProducto, BotonFactura } from "../style/styled-component";

const Carrito = ({ carrito, quitarProducto }) => {
    console.log(carrito);
    return (
        <>
            <h3>Carrito de compras</h3>
            { carrito.length > 0 ? (
                carrito.map((producto, index) => {
                    if (producto.cantidad > 0) {
                        return (
                            <Producto key={index}>
                                <NombreProducto>{producto.nombre}</NombreProducto>
                                <b>Cantidad:</b> {producto.cantidad}
                                <br/>
                                <b>Precio acumulado:</b> {producto.acumulado} $
                                <BotonProducto onClick={() => quitarProducto(producto.id, producto.nombre, producto.precio)}>
                                    {" "}
                                    Quitar del carrito
                                </BotonProducto>
                            </Producto>
                        );
                    }
                })
            ) : (
                <p>Aún no has agregado productos al carrito</p>
            )}
            <NavLink to="/factura">
                <BotonFactura>
                    {" "}
                    Generar factura
                </BotonFactura>
            </NavLink>
        </>
    );
};

const globalProps = estado => {
    return {
        carrito: estado.carrito
    };
};

const mapDispatchToProps = dispatch => {
    return {
        quitarProducto: (id, nombre, precio) => {
            dispatch({
                type: "QUITAR_DEL_CARRITO",
                id,
                nombre,
                precio
            }); 
        }
    };
};

export default connect(globalProps, mapDispatchToProps)(Carrito);