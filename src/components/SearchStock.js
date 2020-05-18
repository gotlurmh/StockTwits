import React, { useState } from "react";

const SearchStock = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchSymbols = searchTerm
      .split(",")
      .map((symbol) => symbol.trim().toUpperCase());

    props.handleStockSymbols(searchSymbols);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Stock Symbol(s):
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      <input type="submit" value="Search" />
    </form>
  );
};
export default SearchStock;
