import React, { Component } from "react";
import SearchStock from "./SearchStock";
import TweetsPreview from "./TweetsPreview";

class StockWidget extends Component {
  state = { tweets: [], counter: [], error: false };

  getStockSymbols = (stockSymbols) => {
    const url = "https://api.stocktwits.com/api/2/streams/symbol/";
    const tweetsToDisplay = [];
    const counts = [];
    this.setState({ error: false });
    stockSymbols.map(async (symbol) => {
      if (symbol) {
        const response = await fetch(`${url}${symbol}.json`);
        const data = await response.json();
        if (data.response.status !== 404) {
          tweetsToDisplay.push(...data.messages);
          this.setState({ tweets: tweetsToDisplay });
          counts.push({ count: data.messages.length, symbol });
          this.setState({ tweets: tweetsToDisplay });
          this.setState({ counter: counts });
        } else {
          this.setState({ tweets: [], counter: [], error: true });
        }
        console.log(this.state);
      } else {
        this.setState({ tweets: [], counter: [], error: false });
      }
    });
  };

  render() {
    return (
      <div>
        <div>search</div>
        <SearchStock handleStockSymbols={this.getStockSymbols} />
        {this.state.error && <p>Invalid symbol was used</p>}
        <TweetsPreview
          tweets={this.state.tweets}
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default StockWidget;
