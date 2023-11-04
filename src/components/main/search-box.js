import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className=" input-container flex items-center w-full"
    >
      <div className="input-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input w-full px-4 py-2"
      />
    </form>
  );
}

export default SearchBox;
