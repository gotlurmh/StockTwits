import React, { useState } from "react";

let interval;
const SearchStock = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    clearInterval(interval);
    let searchSymbols = searchTerm
      .split(",")
      .map((symbol) => symbol.trim().toUpperCase());
    searchSymbols = Array.from(new Set(searchSymbols));
    props.handleStockSymbols(searchSymbols);
    interval = setInterval(props.handleStockSymbols, 5000, searchSymbols);
  };
  const handleKeyUp = (searchTerm) => {
    clearInterval(interval);
    let searchSymbols = searchTerm
      .split(",")
      .map((symbol) => symbol.trim().toUpperCase());
    searchSymbols = Array.from(new Set(searchSymbols));
    props.handleStockSymbols(searchSymbols);
    interval = setInterval(props.handleStockSymbols, 10000, searchSymbols);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Stock Symbol(s):
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // onKeyUp={(e) => handleKeyUp(e.target.value)}
        />
      </label>

      <input type="submit" value="Search" />
    </form>
  );
};
export default SearchStock;
