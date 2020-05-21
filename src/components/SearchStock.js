import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {/* Enter Stock Symbol(s): */}
        <TextField
          id="outlined-helperText"
          label="$"
          //defaultValue="Enter Stock symbol(s)"
          helperText="Multipe symbols must be ',' separated"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Stock symbol(s)"
        />
      </label>
      <IconButton color="secondary" aria-label="add an alarm" type="submit">
        <SearchIcon fontSize="large" />
      </IconButton>
      {/* <Button type="submit" variant="outlined" color="primary">
        Default
      </Button> */}
      {/* <input type="submit" value="Search" /> */}
    </form>
  );
};
export default SearchStock;
