import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'

const ItemDetail = ({ data }) => {

    const [cantidadSeleccionada, guardarCantidadSeleccionada] = useState(1)

    return (
        <div className="card shadow bg-dark">
            <div className="row">
                <div className="col-sm-6">
                    <div className="m-3 text-center">
                        <img src={data.imagen} className="img-fluid" alt="imagen producto" />
                    </div>
                </div>
                <div className="col-sm-6 p-3">
                    <div className="card-body">
                        <h2 className="card-title fw-bold text-light">{data.titulo}</h2>
                        <div className='badge bg-primary text-wrap'>Unidades disponibles: {data.stock}</div>
                        <p className="card-text mt-2 mb-2 fst-italic text-light">{data.descripcion}</p>
                        <p className='text-light'><FontAwesomeIcon icon={faTruckFast} /> Envios desde $250</p>
                        <h5 className="text-light mb-2">$ {data.precio}</h5>
                        <ItemCount guardarCantidadSeleccionada={guardarCantidadSeleccionada} stock={data.stock} productosData={data} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail






