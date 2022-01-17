const estadoInicial = {
    productos: [
        { id: 1, nombre: "Producto 1", precio: 8 },
        { id: 2, nombre: "Producto 2", precio: 10 },
        { id: 3, nombre: "Producto 3", precio: 7 },
        { id: 4, nombre: "Producto 4", precio: 5 },
        { id: 5, nombre: "Producto 5", precio: 15 }
    ],
    carrito: []
};

export default function reducer(estado = estadoInicial, accion) {
    const { id, nombre, precio } = accion;
    switch (accion.type) {
        case "AGREGAR_AL_CARRITO":
            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id, nombre, precio, cantidad: 1, acumulado: precio }]
                };
            } else {
                const nuevoCarrito = [...estado.carrito];
                const yaExiste =
                    nuevoCarrito.filter(productoC => {
                        return productoC.id === id;
                    }).length > 0;

                if (yaExiste) {
                    nuevoCarrito.forEach((productoC, index) => {
                        if (productoC.id === id) {
                            const cantidad = nuevoCarrito[index].cantidad;
                            const acumulado = nuevoCarrito[index].acumulado;
                            nuevoCarrito[index] = {
                                id,
                                nombre,
                                precio,
                                cantidad: cantidad + 1,
                                acumulado: acumulado + precio
                            };
                        }
                    });
                } else {
                    nuevoCarrito.push({
                        id,
                        nombre,
                        precio,
                        cantidad: 1,
                        acumulado: precio
                    });
                }

                return {
                    ...estado,
                    carrito: nuevoCarrito
                };
            }

            break;
        case "QUITAR_DEL_CARRITO":
            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id, nombre, precio, cantidad: 0, acumulado: 0 }]
                };
            } else {
                const nuevoCarrito = [...estado.carrito];
                const yaExiste =
                    nuevoCarrito.filter(productoC => {
                        return productoC.id === id;
                    }).length > 0;

                if (yaExiste) {
                    nuevoCarrito.forEach((productoC, index) => {
                        if (productoC.id === id && nuevoCarrito[index].cantidad > 1) {
                            const cantidad = nuevoCarrito[index].cantidad;
                            const acumulado = nuevoCarrito[index].acumulado;
                            nuevoCarrito[index] = {
                                id,
                                nombre,
                                precio,
                                cantidad: cantidad - 1,
                                acumulado: acumulado - precio
                            };
                        } else if (productoC.id === id) {
                            nuevoCarrito[index] = {};
                        }
                    });
                }

                return {
                    ...estado,
                    carrito: nuevoCarrito
                };
            }

            break;
        default:
            return estado;
    }
}
