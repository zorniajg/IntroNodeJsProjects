const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /admin/add-user => GET
router.get('/', (req, res, next) => {
    res.render('input', {
        pageTitle: 'Add User', 
        path: '/'
    });
});

// /admin/add-user => POST
router.post('/', (req, res, next) => {
    users.push({ title: req.body.title })
    res.redirect('/users');
});

exports.routes = router;
exports.users = users;