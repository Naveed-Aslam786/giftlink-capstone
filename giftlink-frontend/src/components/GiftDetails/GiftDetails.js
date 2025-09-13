import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GiftDetails() {
  const { id } = useParams();
  const [gift, setGift] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/gifts/${id}`)
      .then(res => res.json())
      .then(data => setGift(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!gift) return <p>Loading...</p>;

  return (
    <div>
      <h1>{gift.name}</h1>
      <p>{gift.description}</p>
      <p>Price: ${gift.price}</p>
    </div>
  );
}

export default GiftDetails;
