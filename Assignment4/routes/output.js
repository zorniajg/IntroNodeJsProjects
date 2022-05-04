const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const inputData = require('./input');

const router = express.Router();

router.get('/users', (req, res, next) => {
    const users = inputData.users;
    res.render('output', {
        usernames: users, 
        pageTitle: 'users', 
        path: '/users'
    });
});

module.exports = router;