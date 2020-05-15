import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class StockInput extends Component {
  render() {
    return (
      <div>
        <form>
          <TextField
            id="outlined-textarea"
            label="$"
            placeholder="Enter the stock symbol"
            multiline
            variant="outlined"
          />
        </form>
      </div>
    );
  }
}

export default StockInput;
