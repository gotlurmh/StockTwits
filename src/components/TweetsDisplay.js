import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

class TweetsDisplay extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <div>
        {/* <Grid container justify="center"> */}
        <Grid item>
          <Avatar alt={tweet.user.name} src={tweet.user.avatar_url} />
          <p>{tweet.user.username}</p>
          <p>{tweet.body}</p>
        </Grid>
        {/* </Grid> */}
      </div>
    );
  }
}

export default TweetsDisplay;
