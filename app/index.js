const express = require('express');
const app = express();
//abcd
app.get('/', (req, res) => {
    res.json({
        message: "All good!",
        someEnvVariables: {
            database: {
                host: process.env.DATABASE_HOST,
                user: process.env.DATABASE_USERNAME
            }
        }
    })
});

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
