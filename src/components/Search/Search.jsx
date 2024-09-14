import { useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    event.preventDefault();
    onSearch(event.target.value);
  };

  return (
    <form className={`app__search`}>
      <input type="text" placeholder="Search..." onChange={handleChange} className="search-input" />
      <button type="submit" className="search-button">
        <FaSearch size={20} />
      </button>
    </form>
  );
};

export default Search;
