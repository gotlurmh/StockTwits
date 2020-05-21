import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import "typeface-roboto";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

class TweetsDisplay extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <div>
        <Paper variant="outlined" square elevation={3} />
        <Typography>
          <Grid
            container
            justify="flex-start"
            direction="row"
            alignItems="left"
          >
            <Grid item>
              <Avatar alt={tweet.user.name} src={tweet.user.avatar_url} />
              <Typography variant="subtitle2">{tweet.user.username}</Typography>
              <Typography variant="body1">{tweet.body}</Typography>
            </Grid>
          </Grid>
        </Typography>
      </div>
    );
  }
}

export default TweetsDisplay;
