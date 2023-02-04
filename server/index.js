const cors = require("cors");
const axios = require("axios");
const express = require("express");
const app = express();

app.use(cors());

app.get("/api/data", (req, res) => {
  axios
    .get(
      "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1"
    )
    .then((response) => {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
});

app.get("/api/data/:page", (req, res) => {
  const page = req.params.page;
  axios
    .get(
      `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
