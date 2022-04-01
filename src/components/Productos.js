import React from "react";
import { connect } from "react-redux";
import { ContenedorProductos, ProductoInfo, Boton } from "../style/styled-component";

const Productos = ({ productos, agregarProducto }) => {
    return (
        <>
            <h3>Productos</h3>
            <ContenedorProductos>
            { productos.map((producto, index) => {
                return (
                    <ProductoInfo key={index}>
                        <p>{producto.nombre}</p>
                        <b>Precio:</b> {producto.precio} $
                        <Boton onClick={() => agregarProducto(producto.id, producto.nombre, producto.precio)}>
                            {" "}
                            Agregar al carrito
                        </Boton>
                        </ProductoInfo>
                );
            })}
            </ContenedorProductos>
        </>
    );
};

const mapStateToProps = estado => {
    return {
        productos: estado.productos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        agregarProducto: (id, nombre, precio) => {
            dispatch({
                type: "AGREGAR_AL_CARRITO",
                id,
                nombre,
                precio
            }); 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productos);