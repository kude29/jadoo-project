import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe-container">
      <div className="subscribe-box">
        <h2>
          Subscribe to get information, latest news and other <br />
           interesting offers
          about <span className="brand">Jadoo</span>
        </h2>
        <div className="input-group">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;