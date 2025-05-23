import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    image: "public/images/Image.png" // Replace with real image URL
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    quote: "This is a second sample testimonial showing carousel behavior.",
    image: "public/images/Image.png" // Replace with real image URL
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    quote: "public/images/Image.png" // Replace with real image URL
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { name, location, quote, image } = testimonials[index];

  return (
    <div className="testimonials-container">
     <div>
           <p>TESTIMONIALS</p>
      <h2 className="section-title">What People Say <br />About Us.</h2>
     </div>
      <div className="testimonial-card">
        <img src={image} alt={name} className="testimonial-image" />
        <p className="testimonial-quote">“{quote}”</p>
        <p className="testimonial-name">{name}</p>
        <p className="testimonial-location">{location}</p>
        <div className="testimonial-controls">
          <button onClick={handlePrev}>&uarr;</button>
          <button onClick={handleNext}>&darr;</button>
        </div>
      </div>
    </div>
  );
}
