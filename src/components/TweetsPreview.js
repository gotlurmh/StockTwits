import React, { Component } from "react";
import TweetsDisplay from "./TweetsDisplay";
import Grid from "@material-ui/core/Grid";
// import { GridList } from "@material-ui/core";

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

        <Grid
          // id="containerG"
          container
          direction="column"
          justify="flex-start"
          alignItems="left"
        >
          <Grid
            // className="itemG"
            item
            xs
            maxWidth="sm"
            direction="column"
            zeroMinWidth
            wrap="nowrap"
            spacing={10}
          >
            {tweets.map((tweet, index) => {
              return <TweetsDisplay tweet={tweet} key={index} />;
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default TweetsPreview;
