import React, { Component } from "react";

class FetchData extends Component {
  state = {
    loading: true,
    tweet: null,
  };

  async componentDidMount() {
    const symbols = "AAPL";
    const url = "https://api.stocktwits.com/api/2/streams/symbol/symbols.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ tweet: data.message[0], loading: false });
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>{this.state.tweet.body} </div>
        )}
      </div>
    );
  }
}

export default FetchData;
