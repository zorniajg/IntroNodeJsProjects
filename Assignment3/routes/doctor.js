const path = require('path');

const fs = require('fs');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/send-prescription', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'send-prescription.html'));
});

router.post('/send-prescription', (req, res, next) => {
    fs.writeFileSync('prescriptions.txt', req.body.title);
    res.redirect('/');
});

module.exports = router;