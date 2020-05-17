import React from "react";
import TweetsDisplay from "./TweetsDisplay";
import TweetsPreview from "./TweetsPreview";
import { render } from "@testing-library/react";

const SearchStock = (props) => {
  const { searchTweet } = this.props;
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = searchTweet.filter((stock) =>
      stock.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onKeyUp={handleChange}
      />
      <ul>
        {searchResults.map((item, index) => (
          <TweetsDisplay tweet={item} key={index} />
        ))}
      </ul>
    </div>
  );
};
export default SearchStock;
