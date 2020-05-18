import React, { Component } from "react";

class TweetsDisplay extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <div>
        <p>{tweet.user.username}</p>
        <p>{tweet.body}</p>
      </div>
    );
  }
}

export default TweetsDisplay;
