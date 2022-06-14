import CartWidget  from "./CartWidget"
const Nav = ({ inHeader, cosasParaMostrar, laClase }) => {

  return (
    <nav className={laClase}>
      <a href="#">{inHeader ? "Inicio" : "Facebook"}</a>
      <a href="#">{inHeader ? "Comprar" : "Instagram"}</a>
      <a href="#">{inHeader ? "Contacto" : "Linkedin"}</a>
     <CartWidget/>
      
    </nav>
  )
}

export default Nav
