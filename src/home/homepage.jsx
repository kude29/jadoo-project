// TravelHero.jsx
import React from 'react';
import { Home, PlayCircle } from 'lucide-react';
import './homepage.css'; 


const Homepage = () => {
  return (
    <section className="section bg-gradient-to-r from-white to-orange-50 min-h-screen flex items-center justify-between px-12 py-16">
      {/* Left Side - Text Content */}
      <div className="max-w-xl space-y-6">
        <p className="write1">
          BEST DESTINATIONS AROUND THE WORLD
        </p>
        <h1 className="write2">
          Travel, <span className="text-orange-600">enjoy</span><br />
          and live a new <br />
          and full life
        </h1>
        <p className="text-gray-600 text-base">
          Built Wicket longer admire do barton vanity itself do in it.<br />
          Preferred to sportsmen it engrossed listening. Park gate<br />
          sell they west hard for the.
        </p>

        <div className="buttons">
          <button className="find">
            Find out more
          </button>
          <button className="play">
            <PlayCircle className="color" />
            <span>Play Demo</span>
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative">
        <img
          src="public/images/Traveller 1.png"
          alt="Traveling girl with suitcase"
          className="traveller-image"
        />
        {/* Optional: Plane icon floating */}
       
       
      </div>
    </section>
  );
};

export default Homepage;
