import SearchStock from "./SearchStock";
import React, { Component } from "react";
import TweetsPreview from "./TweetsPreview";

class StockWidget extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SearchStock />
        <TweetsPreview />
      </div>
    );
  }
}

export default StockWidget;
