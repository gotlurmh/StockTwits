import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React, { Component } from "react";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

class TweetsDisplay extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={tweet.user.name} src={tweet.user.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <MuiThemeProvider theme={theme}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="primary"
                >
                  {tweet.user.username}
                </Typography>
              </MuiThemeProvider>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {tweet.body}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }
}

export default TweetsDisplay;
