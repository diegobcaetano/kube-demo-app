const express = require("express");
const app = express();
const rp = require('request-promise');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get("/", async (req, res) => {

  if(getRandomInt(4) == 2) {
    return res.status(502).json({fail: true});
  }

  let seller = null;
  let taxonomy = null;

  const headers = {
    'x-request-id': req.headers['x-request-id'],
    'x-b3-traceid': req.headers['x-b3-traceid'],
    'x-b3-spanid': req.headers['x-b3-spanid'],
    'x-b3-parentspanid': req.headers['x-b3-parentspanid'],
    'x-b3-sampled': req.headers['x-b3-sampled'],
    'x-b3-flags': req.headers['x-b3-flags'],
    'b3': req.headers['b3'],
    'x-version-taxonomy': req.headers['x-version-taxonomy']
  }

  try {
    taxonomy = await rp({
      method: 'GET',
      uri: `http://${process.env.TAXONOMY_SERVICE}`,
      headers
    });
    seller = await rp({
      method: 'GET',
      uri: `http://${process.env.SELLER_SERVICE}`,
      headers
    });
  } catch (e) {
      console.log(e);
  }
  console.log("some info coming from the demo app")
  res.status(202).json({
    message: "Istio GO - aaa",
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
