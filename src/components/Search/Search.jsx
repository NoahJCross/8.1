import { useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ handleSearch, className, ...rest }) => {
  const handleChange = (event) => {
    event.preventDefault();
    handleSearch(event.target.value);
  };

  return (
    <form className={`app__search ${className && className}`} {...rest}>
      <input type="text" placeholder="Search..." onChange={handleChange} className="search-input" />
      <button type="submit" className="search-button">
        <FaSearch size={20} />
      </button>
    </form>
  );
};

export default Search;
