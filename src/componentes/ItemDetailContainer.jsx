import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import bd from '../Utils/firebaseConfig'
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [productosBD, setProductosBD] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getProduct().then((res) => {
            setProductosBD(res)
        })
    }, [id])

    console.log(productosBD)

    const getProduct = async () => {
        const querydb = getFirestore();
        const docRef = doc(querydb, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()

        product.id = docSnapshot.id
        return product

    }
    const productosTipeado = [{
        id: 4,
        titulo: "Tableta con Almendras",
        descripcion: "Descripcion del producto",
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/137/307/products/img_0075_1-tableta-grande-cortada1-193a836c05ee21f88316214608703353-1024-1024.jpg",
        stock: 8,
        categoria: 'tabletas',
        precio: 800
    }]

    return (
        <div className="container mt-4 min-vh-100">
            <ItemDetail data={productosBD} />
        </div>

    )
}

export default ItemDetailContainer