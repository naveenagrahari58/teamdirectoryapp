import React from "react";

function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="header">
      <div className="app-name">Team</div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearchChange}
          className="search-bar"
        />
      </div>
    </header>
  );
}

export default Header;
