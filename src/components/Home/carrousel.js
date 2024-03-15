import React, { useState } from 'react';
import './carrousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slide active" : "slide"}
        >
          {index === currentIndex && <img src={image} alt={`Slide ${index}`} />}
        </div>
      ))}
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
