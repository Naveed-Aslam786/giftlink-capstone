import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/gifts')
      .then(res => res.json())
      .then(data => setGifts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        {gifts.map(gift => (
          <li key={gift._id}>
            <Link to={`/gifts/${gift._id}`}>{gift.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
