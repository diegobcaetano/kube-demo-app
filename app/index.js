const express = require('express');
const app = express();
//abcd
app.get('/', (req, res) => res.send('Hello World! I quit if it works'));

const server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
