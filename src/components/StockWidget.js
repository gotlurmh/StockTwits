import StockInput from "./StockInput";
import React, { Component } from "react";

class StockWidget extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <StockInput />
      </div>
    );
  }
}

export default StockWidget;
