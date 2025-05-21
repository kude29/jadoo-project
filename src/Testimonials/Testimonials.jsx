import React from 'react'
import './Testimonials.css'
const Testimonials = () => {
  return (
    <div className='comment'>
        <div>
            <p className="small-title">TESTIMONIALS</p>
            <h2 className="main-title">What People Say<br />About Us.</h2>
        </div>
        <div className="testimonials">
            <div className="testimonial">
                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <p className="testimonial-author">- John Doe</p>
            </div>
            <div className="testimonial">
                <p className="testimonial-text">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <p className="testimonial-author">- Jane Smith</p>
            </div>
            <div className="testimonial">
                <p className="testimonial-text">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
                <p className="testimonial-author">- Bob Johnson</p>
            </div> 
          
        </div>
    </div>
  )
}

export default Testimonials