const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, function() {
    console.log('어쩌라고 바보야');
    console.log('hi');
    console.log('Listening on port: ', PORT);
});