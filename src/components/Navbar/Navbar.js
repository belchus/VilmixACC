import "./components.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
    <Link to={"/"}>Home</Link>
    </li>
    <li className="navbar">
    <a href="#">Productos</a>
    <ul className="submenu">
    <li>
    <Link to={"/ItemListContainer/cadenita"}>Cadenitas </Link><ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Acero blanco</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero quirurgico</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero dorado</Link>
      </li>
    </ul>
    </li>
    <li>
    <Link to={"/ItemListContainer/aro"}>Aros </Link><ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Acero blanco</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero quirurgico</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero dorado</Link>
      </li>
    </ul>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Pulseras </Link><ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Acero blanco</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero quirurgico</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero dorado</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Esclavas</Link>
      </li>
    </ul>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Tobilleras</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Lenceria</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Mas accesorios</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Hombres</Link> <ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Relojes</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Gorras</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Mas accesorios</Link>
      </li>
    </ul>
    </li>
    </ul>
    </li>
    <li>
    <Link to={"/Contact"}>Contacto</Link>
    </li>
    <li className="Cart">
    <Link to={"/Cart"}><CartWidget/></Link>
    </li>
</ul>
    
    </div>)
}

export default Navbar
