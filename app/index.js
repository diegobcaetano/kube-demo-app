const express = require("express");
const app = express();
const request = require("request");
const axios = require("axios");

app.get("/", async (req, res) => {
  try {
    request("http://kube-demo-seller.demo-service", function (error, response, body) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
    });
  } catch (e) {}
//   try {
//     const seller = await axios.get("kube-demo-seller.demo-service");
//     console.log(seller.data);
//   } catch (e) {
//     console.log(e);
//   }
  res.json({
    message: "Let's link the containers!! 2",
    someEnvVariables: {
      database: {
        host: process.env.DATABASE_HOSTNAME,
        user: process.env.DATABASE_USERNAME,
      },
    },
  });
});

const server = app.listen(3000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
