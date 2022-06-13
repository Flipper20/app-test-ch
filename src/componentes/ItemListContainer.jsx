import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const productos = new Promise((res, rej) => {
            setTimeout(() => {
              res([
                {id :1, nombre: "PS5", color: "Blanco o Negro", precio: 2500, stock: 10, img: "ps5"},
                {id: 2, nombre: "Nintendo Switch", color: "Azul y Rojo o Negro", precio: 4000, stock: 20, img: "switch"},
                {id :3, nombre: "Xbox Series X", color: "Negro", precio: 4000, stock: 20, img: "xbox-x"},
                {id :4, nombre: "PC Gamer Origin", color: "Rojo o Negro", precio: 5000, stock: 9, img: "pcgam"},
                {id :5, nombre: "Flipper", color: "Gris", precio: 3500, stock: 15, img: "flipper"}
              ]);
            }, 2000);
          });
      
          productos
            .then((result) => {
              setItems(result);
            })
            .catch((error) => {
              setError(true);
              console.log(error);
            })
            .finally(()=> {
                setLoading(false);
            })
    },[]);


    return (
        <>
        <div>
            <h3  style={{marginTop: "5rem"}}>{loading && "Cargando productos..."}</h3>
        </div>
         <ItemList items = { items }/>
        </>
       
        )
    }
