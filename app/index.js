const express = require('express');
const app = express();
//a
app.get('/', (req, res) => res.send('Hello World! This is a huge step, this his V3!!!'));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
