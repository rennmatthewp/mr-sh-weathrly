import React from 'react';
// import '../stylesheets/components/Welcome.scss';

export default function Welcome(props) {
  return (
    <header className="welcome">
      <h1>weathrly</h1>
      <form action="submit">
        <input type="text" placeholder="Search Locations" />
        <button>Search</button>
      </form>
    </header>
  );
}