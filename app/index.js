const express = require("express");
const app = express();
const rp = require('request-promise');

app.get("/", async (req, res) => {
  try {
    const seller = await rp(`http://${process.env.SELLER_SERVICE}`);
    console.log(seller);
  } catch (e) {
      console.log(e);
  }
  res.json({
    message: "Let's link the containers!! 3",
    someEnvVariables: {
      database: {
        host: process.env.DATABASE_HOSTNAME,
        user: process.env.DATABASE_USERNAME,
      },
      seller: JSON.parse(seller)
    },
  });
});

const server = app.listen(3000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
