import React, { Component } from "react";
import TweetsPreview from "./TweetsPreview";

class TweetsDisplay extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <div>
        <p>
          <span>{tweet.user.username}</span>
          <span>{tweet.body}</span>
        </p>
      </div>
    );
  }
}

export default TweetsDisplay;
