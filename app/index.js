const express = require('express');
const app = express();
//abcd
app.get('/', (req, res) => res.send('Version 1.0 is ready!'));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
