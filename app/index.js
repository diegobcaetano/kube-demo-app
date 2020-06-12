const express = require("express");
const app = express();
const rp = require('request-promise');

app.get("/", async (req, res) => {
  let seller = null;
  let taxonomy = null;
  // try {
  //   seller = await rp({
  //     method: 'GET',
  //     uri: `http://${process.env.SELLER_SERVICE}`,
  //     headers: req.headers
  //   });
  //   taxonomy = await rp({
  //     method: 'GET',
  //     uri: `http://${process.env.TAXONOMY_SERVICE}`,
  //     headers: req.headers
  //   })
  // } catch (e) {
  //     console.log(e);
  // }
  res.json({
    message: "Let's link the containers!! 3",
    someEnvVariables: {
      database: {
        host: process.env.DATABASE_HOSTNAME,
        user: process.env.DATABASE_USERNAME,
      },
      taxonomy: JSON.parse(taxonomy),
      seller: JSON.parse(seller)
    },
  });
});

const server = app.listen(3000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
