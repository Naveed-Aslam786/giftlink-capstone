import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to GiftLink</h1>
      <p>Discover amazing gifts!</p>
      <Link to="/main">Go to Main Page</Link>
    </div>
  );
}

export default LandingPage;

