import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import mockEvents from '../data/mockEvents.json';


const EventDetails = () => {
  const { id } = useParams();
  const event = mockEvents.find(e => e.id === parseInt(id));
  const { user } = useContext(AuthContext);
  const [seats, setSeats] = useState(event.availableSeats);
  const history = useHistory();

  const handleBooking = () => {
    if (!user) {
      alert('Please login to book tickets');
      history.push('/login');
    } else if (seats > 0) {
      setSeats(seats - 1);
      alert('Ticket booked successfully!');
    } else {
      alert('Event fully booked');
    }
  };

  if (!event) return <p>Event not found.</p>;

  return (
    <div className='event-details-main'>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Seats Available: {seats > 0 ? seats : 'Fully Booked'}</p>
      <p>Price: ₹{event.price}</p>
      <button onClick={handleBooking} disabled={seats === 0}>
        {seats > 0 ? 'Book Ticket' : 'Fully Booked'}
      </button>
    </div>
  );
};

export default EventDetails;
