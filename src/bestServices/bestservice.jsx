import React from 'react';
import './bestservice.css'; // Import your CSS file for styles

const services = [
  {
    icon: 'src/assets/images/Group 48.png',
    title: 'Calculated Weather',
    text:' Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    icon: 'src/assets/images/plane copy.png',
    title: 'Best Flights',
    text: 'Engrossed listening. Park gate sell they west hard for the.',
    highlight: true, // used for extra styling
  },
  {
    icon: 'src/assets/images/Group 50.png',
    title: 'Local Events',
    text: 'Barton vanity itself do in it. Prefer to men it engrossed listening.',
  },
  {
    icon: 'src/assets/images/Group 49.png',
    title: 'Customization',
    text: 'We deliver outsourced aviation services for military customers',
  },
];

const BestServices = () => {
  return (
    <section className="services-section">
      <p className="category-label">Category</p>
      <h2 className="section-title">We Offer Best Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${service.highlight ? 'highlight' : ''}`}
          >
            {service.highlight && <div className="corner-deco" />}
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestServices;