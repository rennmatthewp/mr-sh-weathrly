import React from 'react';
import '../stylesheets/components/Welcome.scss';

export default function Welcome(props) {
  return (
    <div className="welcome">
      <h2>Welcome!</h2>
      <form action="submit">
        <input type="text" placeholder="Search Locations" />
        <button>Search</button>
      </form>
    </div>
  );
}
