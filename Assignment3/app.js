const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const doctorRoutes = require('./routes/doctor');
const patientRoutes = require('./routes/patient');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(doctorRoutes);
app.use(patientRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);