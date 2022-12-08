import React from "react";
import arrayProductos from "./json/productos.json"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState ([]) 
    const {id} = useParams()
    
    useEffect(() => {
        const promesa = new Promise ((resolve, reject) => {
           setTimeout(() => {
            resolve (id ? arrayProductos.filter(item => item.categoria === id ) : arrayProductos);

           }, 2000);
            
        });
        promesa.then((data) => {
            setItems(data)
        })
    }, [id])
    return (
        <div>
        <div className="container">
                    
                     <ItemList items={items} />
                    
                    <ItemCount stock={10} />

                </div>

            

        </div>
    )
}

export default ItemListContainer;