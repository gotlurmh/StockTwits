import { List } from "@material-ui/core";
import React, { Component } from "react";
import TweetsDisplay from "./TweetsDisplay";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

class TweetsPreview extends Component {
  render() {
    const { tweets, counter } = this.props;

    return (
      <div>
        <div>
          {counter.map((counts, index) => {
            return (
              <Typography key={index} variant="subtitle2" align="justify">
                Tweets displayed for {counts.symbol} is {counts.count}
              </Typography>
            );
          })}
        </div>
        <List>
          {tweets.map((tweet, index) => {
            return (
              <React.Fragment key={index}>
                <TweetsDisplay tweet={tweet} />
                <Divider variant="inset" component="li" />
              </React.Fragment>
            );
          })}
        </List>
      </div>
    );
  }
}

export default TweetsPreview;
