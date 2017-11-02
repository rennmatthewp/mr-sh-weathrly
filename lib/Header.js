import React from 'react';

export default function Header(props) {
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
