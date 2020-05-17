import React, { Component } from "react";
import TweetsPreview from "./TweetsPreview";
import SearchStock from "./SearchStock";

class TweetsDisplay extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <div>
        <p>
          <p>{tweet.user.username}</p>
          <p>{tweet.body}</p>
        </p>
      </div>
    );
  }
}

export default TweetsDisplay;
