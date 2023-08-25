import React, { useState, useEffect } from 'react'

const ImageSlider = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    }, props.intervaltime);

    return () => {
      clearInterval(interval);
    };
  }, [props.images.length, props.intervaltime]);

  return (
    <div className="image-slider">
      {props.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default ImageSlider;