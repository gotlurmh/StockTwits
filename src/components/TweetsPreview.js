import React, { Component } from "react";
import TweetsDisplay from "./TweetsDisplay";
class TweetsPreview extends Component {
  render() {
    const { tweets, counter } = this.props;

    return (
      <div>
        <div>
          {counter.map((counts, index) => {
            return (
              <p key={index}>
                {counts.symbol}:{counts.count}
              </p>
            );
          })}
        </div>
        {tweets.map((tweet, index) => {
          return <TweetsDisplay tweet={tweet} key={index} />;
        })}
      </div>
    );
  }
}

export default TweetsPreview;
