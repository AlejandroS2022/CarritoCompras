import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Factura = ({ carrito }) => {
    console.log(carrito);
    let montoTotal = 0;
    return (
        <>
            <h1>Factura</h1>
            { carrito.length > 0 ? (
                carrito.map((producto, index) => {
                    if (producto.cantidad > 0) {
                        montoTotal = montoTotal + producto.acumulado;
                        return (
                            <Producto key={index}>
                                <NombreProducto>{producto.nombre}</NombreProducto>
                                <b>Cantidad:</b> {producto.cantidad}
                                <br/>
                                <b>Precio acumulado:</b> {producto.acumulado} $
                            </Producto>
                        );
                    }
                })
            ) : (
                <p>Aún no se han agregado productos, por favor utilice el menú Tienda.</p>
            )}
            <br/>
            <h3><b>Total a pagar: </b>{montoTotal}</h3>
        </>
    );
};

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight_bold;
    font-size: 16px;
    color: #000;
`;

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

export default connect(globalProps, mapDispatchToProps)(Factura);