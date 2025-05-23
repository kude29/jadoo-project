import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="logo">Jadoo.</h2>
        <p className="description">
          Book your trip in minute, get full control for much longer.
        </p>
      </div>

      <div className="footer-links">
        <div className="column">
          <h4>Company</h4>
          <div className='content'>
            <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Mobile</a>
          </div>
        </div>

        <div className="column">
          <h4>Contact</h4>
          <div className='content'>
             <a href="#">Help/FAQ</a>
          <a href="#">Press</a>
          <a href="#">Affiliates</a>
          </div>
        </div>
        

        <div className="column">
          <h4>More</h4>
          <div className='content'>
            <a href="#">Airlinefees</a>
          <a href="#">Airline</a>
          <a href="#">Low fare tips</a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="socials">
          <div className="icon"><img src="src/assets/images/Facebook Icon.png" alt="" /></div>
          <div className="icon1"><img src="src/assets/images/instagram 1.png" alt="" /></div>
          <div className="icon"><img src="src/assets/images/Vector.png" alt="" /></div>
        </div>
        <p className="discover-text">Discover our app</p>
        <div className="store-buttons">
          <img src="src/assets/images/Google Play.png" alt="Google Play" />
          <img src="src/assets/images/Play Store.png" alt="Apple Store" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;