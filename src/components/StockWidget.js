import React, { Component } from "react";
import SearchStock from "./SearchStock";
import TweetsPreview from "./TweetsPreview";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class StockWidget extends Component {
  state = {
    tweets: [],
    counter: [],
    error: false,
    invalidSymbol: [],
  };

  getStockSymbols = (stockSymbols) => {
    const url = "https://stock-twit.herokuapp.com/";
    const tweetsToDisplay = [];
    const counts = [];
    this.setState({ error: false });
    stockSymbols.map(async (symbol) => {
      if (symbol) {
        const response = await fetch(`${url}${symbol}`);
        const data = await response.json();
        if (data.response.status !== 404) {
          tweetsToDisplay.push(...data.messages);
          this.setState({ tweets: tweetsToDisplay });
          counts.push({ count: data.messages.length, symbol });
          this.setState({ tweets: tweetsToDisplay });
          this.setState({ counter: counts });
        } else {
          const invalidSymbols = new Set([...this.state.invalidSymbol, symbol]);
          this.setState({
            tweets: [],
            counter: [],
            error: true,
            invalidSymbol: Array.from(invalidSymbols),
          });
        }
      } else {
        this.setState({
          tweets: [],
          counter: [],
          error: false,
          invalidSymbol: [],
        });
      }
    });
  };

  render() {
    return (
      <Container maxWidth="md">
        <SearchStock handleStockSymbols={this.getStockSymbols} />
        {this.state.error && (
          <Card>
            <CardContent>
              <Typography variant="subtitle2">
                {this.state.invalidSymbol.join(",")} is invalid
              </Typography>
            </CardContent>
          </Card>
        )}
        <TweetsPreview
          tweets={this.state.tweets}
          counter={this.state.counter}
        />
      </Container>
    );
  }
}

export default StockWidget;
