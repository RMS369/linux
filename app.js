const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, function() {
    console.log('hello 과연');
    console.log('hi');
    console.log('Listening on port: ', PORT);
});
