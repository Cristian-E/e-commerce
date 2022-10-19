import React, { useEffect, useState } from 'react'
import Item from './Item'
import ListadoProductos from '../Utils/ListadoProductos'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import bd from '../Utils/firebaseConfig'



const ItemListContainer = () => {

    const [datos, setDatos] = useState([])

    //parametro de categoria
    const { categoria } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')

        if(categoria) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoria))

            getDocs(queryFilter)
            .then(
                res => setDatos(res.docs.map( producto => ({ id: producto.id, ...producto.data() })))
            )
        } else {
            getDocs(queryCollection)
            .then(
                res => setDatos(res.docs.map( producto => ({ id: producto.id, ...producto.data() }))))
        }


    }, [categoria])

    const submitComprar = () => { console.log("añadido al carrito") }


    return (
        <div className="container min-vh-100">
            <div className='row mt-4'>
                {
                    datos.length > 0 ?
                    datos.map(item => {
                            return (
                                <Item
                                    key={item.id}
                                    data={item}
                                    accion={submitComprar}
                                />
                            )


                        }) : null
                }
            </div>
        </div>
    )
}

export default ItemListContainer;