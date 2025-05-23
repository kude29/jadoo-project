import React from 'react';
import './BookingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faPaperPlane, faMap, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

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

     <div className='w-50 d-flex align-items-center justify-content-center'>
          <div className='TripDiv '>
            <div className='TripDiv-Img mb-3'>
              <div className='div'>
                <img src="public/images/Rectangle 17.jpg"/>
              </div>
            </div>
            <div className='container d-flex flex-column'>
              <h4 className='mx-3 trip-h4'>Trip to Greece</h4>
              <div className='text2 d-flex mx-3 gap-2'>
                <p>14-29 June|</p>
                <p>By Robbin John</p>
              </div>
              <div className='d-flex gap-4 mx-3 text3 text-center'>
                <p className='bg-light rounded-circle'><FontAwesomeIcon icon={faLeaf} /></p>
                <p className='bg-light rounded-circle'><FontAwesomeIcon icon={faMap} /></p>
                <p className='bg-light rounded-circle'><FontAwesomeIcon icon={faPaperPlane} /></p>
              </div>
              <div className='d-flex justify-content-between mx-3 text4'>
                <p className='ongoing'><span><FontAwesomeIcon icon={faBuilding} /></span>24 people on Going</p>
                <p className='heart'><FontAwesomeIcon icon={faHeart} /></p>
              </div>
              <div className='Trip-rome-con '>
                <div className='d-flex Trip-rome container '>
                  <div>
                    <img src="public/images/Mask Group.png" alt="" />
                  </div>

                  <div className='container'>
                    <h6>Ongoing</h6>
                    <h5>Trip to Rome</h5>
                    <h4><span>40%</span> completed</h4>
                    <div>
                      <input type="range" min="1" max="100" value="40" class="slider" id="myRange"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default BookingPage;