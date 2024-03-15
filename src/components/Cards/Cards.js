import  Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './Cards.css';




function Cards( {info} ) {
  return (

      <div  className="cardspadre">
      <div  className="cards">
      <Card.Body className="img" >
      <Card.Img variant="top" src={info.imagen} className="Card"/>
      <div className="desc">
      <Link  to= {`/Item/${info.id}`}> <h3 >{info.nombre}</h3> </Link>
        <h3 >${info.precio}</h3>
        </div>   
     
      </Card.Body>
      </div>
      </div>
  );
}

export default Cards;