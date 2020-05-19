import React, { Component } from "react";
import TweetsDisplay from "./TweetsDisplay";
import Grid from "@material-ui/core/Grid";
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
        <Grid container>
          {/* <Grid item> */}
          {tweets.map((tweet, index) => {
            return <TweetsDisplay tweet={tweet} key={index} />;
          })}
          {/* </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default TweetsPreview;
