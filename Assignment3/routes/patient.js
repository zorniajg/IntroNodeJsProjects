const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/view-prescriptions', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'view-prescriptions.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home-page.html'));
});

module.exports = router;