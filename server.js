const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello William');
})

app.listen(8000);