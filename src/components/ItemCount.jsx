import React, { useState, useEffect } from 'react';

export default function ItemCount({ desde }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  //EN CADA CAMBIO (y la primera vez)
  useEffect(() => {
    console.log('render');
  });

  //EN CADA CAMBIO DONDE CAMBIE LA X SOLAMENTE (y la primera vez)
  useEffect(() => {
    if (x == 0) {
      alert('Valor inválido: cero o menos');
    }
  }, [x]);

  //console.log('render');
  return (
    <>
      <div>
        Cantidad: {x}
        <br />
        <button
          onClick={() => {
            /* x = x + 1; */
            setX(x + 1);
          }}
        >
          Sumar
        </button>
        <button
          onClick={() => {
            setX(x - 1);
          }}
        >
          Restar
        </button>
      </div>
    </>
  );
}