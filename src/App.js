import React from "react";
import "./App.css";

import StockInput from "./components/StockInput";

function App() {
  return (
    <div className="App">
      <p>Please enter the stock symbols to get related tweets</p>
      <StockInput />
    </div>
  );
}

export default App;
