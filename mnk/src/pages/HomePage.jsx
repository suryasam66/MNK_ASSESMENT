import React from 'react';
import EventList from '../components/Eventlist';
import './style.css'

const HomePage = () => {
  return (
    <div className='home-main-container'>
      <h1>Event Booking System</h1>
      <EventList/>
    </div>
  );
};

export default HomePage;
