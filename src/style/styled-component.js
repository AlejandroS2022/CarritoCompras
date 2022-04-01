import styled from "styled-components";

export const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;

export const NombreProducto = styled.p`
    font-weight_bold;
    font-size: 16px;
    color: #000;
`;

export const BotonProducto = styled.button`
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

export const BotonFactura = styled.button`
    border: none;
    background: #3cb314;
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

export const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

export const ProductoInfo = styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;

    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

export const Boton = styled.button`
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

export const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;

    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }

    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;