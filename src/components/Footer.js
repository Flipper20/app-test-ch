import Nav from "./Nav"

const Footer = () => {

  return (
    <footer className="footer">
      <p>Copyright &copy; Flipper Shop</p>
      <Nav 
      inHeader={false} 
      cosasParaMostrar={["facebook","instagram","linkedin"]}
      laClase="navbar-footer"
      />
    </footer>
  )
  
}

export default Footer