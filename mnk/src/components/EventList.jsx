import React, { useState, useEffect, useMemo } from 'react';
import EventItem from './EventItem';
import Pagination from './Pagination';
import mockEvents from '../data/mockEvents.json';
import './component.css'

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 500);
  }, []);

  const filteredEvents = useMemo(() => {
    return events
      .filter(event => (category ? event.category === category : true))
      .filter(event => event.title.toLowerCase().includes(search.toLowerCase()));
  }, [events, category, search]);

  const displayedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  }, [filteredEvents, currentPage]);

  if (loading) return <p>Loading events...</p>;

  return (
    <div >
      <input type="text" placeholder="Search by title" onChange={e => setSearch(e.target.value)} id='search'/>
      <select onChange={e => setCategory(e.target.value)} id='select-content'>
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Workshop">Workshop</option>
        <option value="Art">Art</option>
      </select>
      <div className='stored-main'>
      {displayedEvents.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
      <Pagination total={filteredEvents.length} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={eventsPerPage} />
      </div>
    </div>
  );
};

export default EventList;
