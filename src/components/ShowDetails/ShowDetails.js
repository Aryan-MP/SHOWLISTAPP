import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowDetails.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    alert(`Booking ticket for ${show.name}`);
  };

  return (
    <div className="show-details-container">
      {show ? (
        <div>
          <h1>{show.name}</h1>
          <img src={show.image?.medium} alt={show.name} />
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <button onClick={handleBookTicket}>Book Ticket</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to Show List</Link>
    </div>
  );
};

export default ShowDetails;
