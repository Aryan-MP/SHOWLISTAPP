import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);


  const filteredShows = shows.filter(show => show.show.name !== 'All Stars');

  return (
    <div className="show-list-container">
      <h1>Show List</h1>
      <ul>
        {filteredShows.map(show => (
          <li key={show.show.id}>
            <Link to={`/details/${show.show.id}`}>
              {show.show.image && <img src={show.show.image.medium} alt={show.show.name} />}
              <div>
                <span className="show-name">{show.show.name}</span>
                <span className="genres">{show.show.genres.join(', ')}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
