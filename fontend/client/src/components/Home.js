
import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from './picture/pic1.jpg';

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  return (
    <div style={containerStyle} className="bg-blue-500 text-white">
      <p className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
        A space where sharing, learning, helping, and making friends come together.
      </p>
     
    </div>
  );
};

export default Home;
