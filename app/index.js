const express = require("express");
const app = express();
const axios = require('axios');

app.get("/", async (req, res) => {
    try {
        const seller = await axios.get("kube-demo-seller.demo-service.svc.cluster.local");
        console.log(seller.data);
    } catch(e) {
        console.log(e);
    }
  res.json({
    message: "Let's link the containers!!",
    someEnvVariables: {
      database: {
        host: process.env.DATABASE_HOSTNAME,
        user: process.env.DATABASE_USERNAME,
      },
    },
  });
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
