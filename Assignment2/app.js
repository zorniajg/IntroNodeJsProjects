const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('in /users');
    res.send('<h1>On "users" page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('in origin');
    res.send('<h1>Home Page</h1>');
});

app.listen(3000);