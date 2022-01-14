const estadoInicial = {
    productos: [
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" },
        { id: 4, nombre: "Producto 4" },
        { id: 5, nombre: "Producto 5" }
    ],
    carrito: []
};

export default function reducer(estado = estadoInicial, accion) {
    const { id, nombre } = accion;
    switch (accion.type) {
        case "AGREGAR_AL_CARRITO":
            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{ id, nombre, cantidad: 1 }]
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
                            nuevoCarrito[index] = {
                                id,
                                nombre,
                                cantidad: cantidad + 1
                            };
                        }
                    });
                } else {
                    nuevoCarrito.push({
                        id,
                        nombre,
                        cantidad: 1
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
                    carrito: [{ id, nombre, cantidad: 0 }]
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
                            nuevoCarrito[index] = {
                                id,
                                nombre,
                                cantidad: cantidad - 1
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
