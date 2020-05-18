import React, { Component } from "react";
import TweetsDisplay from "./TweetsDisplay";
class TweetsPreview extends Component {
  render() {
    const { tweets } = this.props;

    return (
      <div>
        {tweets.map((tweet, index) => {
          return <TweetsDisplay tweet={tweet} key={index} />;
        })}
      </div>
    );
  }
}

export default TweetsPreview;
