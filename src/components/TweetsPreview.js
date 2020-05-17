import React, { Component } from "react";
import TweetData from "../data/messages.json";
import TweetsDisplay from "./TweetsDisplay";
class TweetsPreview extends Component {
  render() {
    return (
      <div>
        {TweetData.map((item, index) => {
          return <TweetsDisplay tweet={item} key={index} />;
        })}
      </div>
    );
  }
}

export default TweetsPreview;
