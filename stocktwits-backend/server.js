const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 4000;

const whitelist = ["http://localhost:3000", "https://gotlurmh.github.io"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// app.use(cors());
app.get("/:symbol", cors(corsOptions), async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  try {
    const { data } = await axios.get(
      `https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json`
    );

    res.send(data);
  } catch (error) {}
});

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App started on https://%s:%s", host, port);
});
