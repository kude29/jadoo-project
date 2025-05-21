import React from 'react';
import './BookingPage.css';

const steps = [
  {
    icon: '🧭',
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    color: '#FDCB6E',
  },
  {
    icon: '💳',
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    color: '#FF7675',
  },
  {
    icon: '✈️',
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    color: '#00B894',
  },
];

const BookingPage = () => {
  return (
    <section className="trip-steps">
      <div className="left">
        <p className="small-title">Easy and Fast</p>
        <h2 className="main-title">Book Your Next Trip<br />In 3 Easy Steps</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="icon" style={{ backgroundColor: step.color }}>{step.icon}</div>
              <div className="text">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right">
       <img src="src/assets/images/Image.png" alt="" />
      </div>
    </section>
  );
};

export default BookingPage;