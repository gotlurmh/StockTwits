import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";
import "./App.css";

import StockWidget from "./components/StockWidget";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">StockTwits Widget</Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h5">
        <p>Enter the stock symbol(s) to get related tweets</p>
      </Typography>
      <StockWidget />
    </div>
  );
}

export default App;
