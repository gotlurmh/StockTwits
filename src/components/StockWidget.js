import React, { Component } from "react";
import SearchStock from "./SearchStock";
import TweetsPreview from "./TweetsPreview";

class StockWidget extends Component {
  state = { tweets: [], error: false };

  getStockSymbols = (stockSymbols) => {
    const url = "https://api.stocktwits.com/api/2/streams/symbol/";
    const tweetsToDisplay = [];
    this.setState({ error: false });
    stockSymbols.map(async (symbol) => {
      if (symbol) {
        const response = await fetch(`${url}${symbol}.json`);
        const data = await response.json();
        if (data.response.status !== 404) {
          tweetsToDisplay.push(...data.messages);
          this.setState({ tweets: tweetsToDisplay });
        } else {
          this.setState({ error: true });
        }
        console.log(data);
      }
    });
  };

  render() {
    return (
      <div>
        <div>search</div>
        <SearchStock handleStockSymbols={this.getStockSymbols} />
        {this.state.error && <p>Invalid symbol was used</p>}
        <TweetsPreview tweets={this.state.tweets} />
      </div>
    );
  }
}

export default StockWidget;
