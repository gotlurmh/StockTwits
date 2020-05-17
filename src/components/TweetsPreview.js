import React, { Component } from "react";
import TweetData from "../data/messages.json";
import SearchStock from "./SearchStock";
class TweetsPreview extends Component {
  render() {
    return (
      <div>
        {TweetData.map((item, index) => {
          return <SearchStock searchTweet={item} key={index} />;
        })}
      </div>
    );
  }
}

export default TweetsPreview;
