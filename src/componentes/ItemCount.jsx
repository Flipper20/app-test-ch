import React, { useEffect, useState } from 'react'
import { Card, Button, ButtonGroup }from "react-bootstrap"
import "./itemCount.css"
import swal from 'sweetalert'


export default function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState(initial);
  useEffect(() => { 
    if(count >= stock) {
      console.log("Error: No queda stock")
      swal("Atención",`Solo puedes ordenar un máximo de ${ stock } unidades de este producto.`, "info")
    }
  }, [count])
  
  const restar = () => {
    count > initial ? setCount(count - 1) : console.log("Error: La cantidad es menor a 1");
  }

  const sumar = () => {
    if((count >= 1) && (count < stock)) {
      setCount(count + 1)
    }
  }

  return (
    <Card>
      <ButtonGroup>
          <Button className='btn-menosmas' onClick={ restar }>-</Button>
          <input type="number" style={{"textAlign": "center"}} value={ count } readOnly/>
          <Button className='btn-menosmas' onClick={ sumar }>+</Button>
      </ButtonGroup>
      <Button onClick={onAdd} className="btn-add" style={{"marginTop": "1rem", marginInline: "0.5rem"}}>
        Agregar al carrito
      </Button>
      <Button onClick={()=> { setCount(initial) }} variant="light" style={{"marginTop": "1rem"}}>
        Reiniciar
      </Button>
  </Card>
  )
}
