import React from 'react';

import Carousel from './carrousel.js';


const images = [
  {
    id: 1,
    src: require('../../assets/img/flor.jpeg'), // Ajusta la ruta según la ubicación de tus imágenes
    title: 'Imagen 1'
  },
  {
    id: 2,
    src: require('../../assets/img/flor.jpeg'), // Ajust// Ajusta la ruta según la ubicación de tus imágenes
    title: 'Imagen 2'
  },
  {
    id: 3,
    src: require('../../assets/img/flor.jpeg'), // Ajust
    title: 'Imagen 3'
  }
];
  
  const Home = () => {
    return (
      <div>
        <Carousel images={images} />
      </div>
    );
  };
  

  
export default Home;