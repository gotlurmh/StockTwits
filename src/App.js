import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

import "typeface-roboto";
import "./App.css";

import StockWidget from "./components/StockWidget";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="h6">StockTwits Widget</Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
      <Typography variant="h5">
        <p>Enter the stock symbol(s) to get related tweets</p>
      </Typography>
      <StockWidget />
    </div>
  );
}

export default App;
