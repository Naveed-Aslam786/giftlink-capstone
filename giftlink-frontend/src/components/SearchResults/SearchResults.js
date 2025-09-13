import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function SearchResults() {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('q');

  useEffect(() => {
    fetch(`http://localhost:5000/api/gifts/search?category=${query}`)
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(err => console.error(err));
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {results.map(gift => (
          <li key={gift._id}>
            <Link to={`/gifts/${gift._id}`}>{gift.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
