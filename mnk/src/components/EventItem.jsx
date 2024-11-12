import React from 'react';
import { Link } from 'react-router-dom';
import './component.css'
const EventItem = ({ event }) => (
  <div className='event-item-main'>
    <h3>{event.title}</h3>
    <p>{event.description}</p>
    <p>Category: {event.category}</p>
    <p>Date: {event.date}</p>
    <p>Seats: {event.availableSeats > 0 ? event.availableSeats : 'Fully Booked'}</p>
    <p>Price: ₹{event.price}</p>
    <Link to={`/event/${event.id}`}>View Details</Link>
  </div>
);

export default EventItem;
