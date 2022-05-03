import { useState } from 'react';

const modelos = [
    {
        name: 'Doble de 100',
        id: '1',
        cantidad: 0,
        cortes: [
            {
                cantidadTotal: 1,
                type: '1x1-1/2',
                medida: 100,
                cantidad: 4,
                id: 1,
            },
            {
                cantidadTotal: 1,
                type: '1/2 x 1',
                medida: 50,
                cantidad: 1,
                id: 1,
            },
            {
                cantidadTotal: 1,
                type: '1/2 x 1',
                medida: 46,
                cantidad: 1,
                id: 1,
            },
            {
                cantidadTotal: 1,
                type: '1x1',
                medida: 46,
                cantidad: 1,
                id: 2,
            },
            {
                cantidadTotal: 1,
                type: '1x1',
                medida: 50,
                cantidad: 1,
                id: 2,
            },
            {
                cantidadTotal: 1,
                type: 'varilla-12',
                medida: 52,
                cantidad: 1,
                id: 2,
            },
            {
                cantidadTotal: 1,
                type: 'fb-blanco',
                medida: '46 x 60',
                cantidad: 1,
                id: 2,
            },
            {
                cantidadTotal: 1,
                type: 'fb-negro',
                medida: '50 x 60',
                cantidad: 1,
                id: 2,
            },
        ],
    },
    {
        name: 'Doble de 125',
        id: '2',
        cantidad: 0,
        cortes: [
            {
                cantidadTotal: 1,
                type: '1x1',
                medida: 125,
                cantidad: 4,
                id: 1,
            },
            {
                cantidadTotal: 1,
                type: '1x2',
                medida: 100,
                cantidad: 1,
                id: 2,
            },
            {
                cantidadTotal: 1,
                type: '1x1123',
                medida: 125,
                cantidad: 4,
                id: 4,
            },
            {
                cantidadTotal: 1,
                type: '1x2rewr',
                medida: 100,
                cantidad: 1,
                id: 5,
            },
        ],
    },
    {
        name: 'Tripode',
        id: '3',
        cantidad: 0,
        cortes: [
            {
                cantidadTotal: 1,
                type: '1x2',
                medida: 50,
                cantidad: 2,
                id: 2,
            },
        ],
    },
    {
        name: 'Doble de mesa',
        id: '4',
        cantidad: 0,
        cortes: [
            {
                cantidadTotal: 1,
                type: '1x1-1/',
                medida: 70,
                cantidad: 2,
                id: 6,
            },
        ],
    },
];

export const Carrito = () => {
    const [pedido, setPedido] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [show, setShow] = useState(false);
    console.log(materiales);
    console.log(pedido);

    // al hacer click paso el modelo clickeado

    const handleClick = (modelo) => {
        // aumenta la cantidad y actualiza pedido

        const existe = pedido.some((art) => art.id === modelo.id);

        if (existe) {
            const nuevoPedido = pedido.map((art) => {
                if (art.id === modelo.id) {
                    art.cantidad = art.cantidad + 1;
                    // art.cortes.forEach(
                    //     (corte) => (corte.cantidadTotal = art.cantidad)
                    // );
                    return art;
                } else {
                    return art;
                }
            });
            console.log(['setPedido']);
            setPedido(nuevoPedido);
        } else {
            modelo.cantidad = modelo.cantidad + 1;
            setPedido([...pedido, modelo]);
        }
    };

    const mostrarMateriales = () => {
        // transforma el pedido en un nuevo arreglo de objetos con solo los materiales
        // const materialesNuevos = modelo.cortes.map((art, i) => {
        //     return {
        //         type: art.type,
        //         id: art.id,
        //         data: [
        //             {
        //                 medida: art.medida,
        //                 cantidad: art.cantidad,
        //                 cantidadTotal: art.cantidad,
        //             },
        //         ],
        //     };
        // });
        console.log(pedido);

        // if (materiales.length) {
        let arr = [];
        console.log(pedido);
        pedido.forEach((item) => {
            item.cortes.forEach((mat) => {
                console.log(item);
                if (arr.some((el) => mat.type === el.type)) {
                    console.log(mat);
                    arr.find((el) => mat.type === el.type).data.forEach((i) => {
                        if (i.medida !== mat.medida) {
                            console.log(i);
                            console.log(mat);
                            if (
                                arr
                                    .find((el) => mat.type === el.type)
                                    .data.every((i) => i.medida !== mat.medida)
                            ) {
                                arr.find((el) => mat.type === el.type).data = [
                                    ...arr.find((el) => mat.type === el.type)
                                        .data,
                                    {
                                        medida: mat.medida,
                                        cantidad: mat.cantidad,
                                        cantidadTotal:
                                            item.cantidad * mat.cantidad,
                                    },
                                ];
                            }
                        } else {
                            i.cantidadTotal =
                                i.cantidadTotal + item.cantidad * mat.cantidad;
                            console.log(i);
                        }
                    });
                } else {
                    const element = {
                        type: mat.type,
                        id: mat.id,
                        data: [
                            {
                                medida: mat.medida,
                                cantidad: mat.cantidad,
                                cantidadTotal: item.cantidad * mat.cantidad,
                            },
                        ],
                    };
                    arr.push(element);
                    return;
                }
            }, []);
            console.log(arr);

            // return [...arr]
        });
        setMateriales([...arr]);
        setShow(!show);
        // } else {
        //     setMateriales([...materialesNuevos]);
        // }
    };

    return (
        <div style={{ maxWidth: 1000, margin: 'auto', padding: '2rem' }}>
            <h1>Carrito</h1>
            {modelos.map((modelo) => (
                <div key={modelo.id}>
                    <h3>{modelo.name}</h3>
                    <button onClick={() => handleClick(modelo)}>Agregar</button>
                    <hr />
                </div>
            ))}
            <button onClick={mostrarMateriales}>Mostrar materiales</button>
            {show && (
                <div>
                    {materiales.map((item, i) => (
                        <div key={i} style={{ display: 'flex' }}>
                            <div>{item.type}--</div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                {item.data.map((i, j) => (
                                    <span key={j}>
                                        {i.medida}--{i.cantidadTotal}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
