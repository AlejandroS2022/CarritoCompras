import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
                                Cantidad:{producto.cantidad}
                                <BotonProducto onClick={() => quitarProducto(producto.id, producto.nombre)}>
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

const BotonProducto = styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: 0.3s ease all;

    &:hover {
        background: #1c6ab9;
    }
`;

const globalProps = estado => {
    return {
        carrito: estado.carrito
    };
};

const mapDispatchToProps = dispatch => {
    return {
        quitarProducto: (id, nombre) => {
            dispatch({
                type: "QUITAR_DEL_CARRITO",
                id,
                nombre
            }); 
        }
    };
};

export default connect(globalProps, mapDispatchToProps)(Carrito);