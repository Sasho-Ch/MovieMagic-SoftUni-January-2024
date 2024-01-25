const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes.js')
const configHandlebars = require('./config/configHandlebars.js');
const configExpress = require('./config/confixExpress.js');

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes);

mongoose.connect('mongodb://localhost:27017/magic-movies')
    .then(() => {
        console.log('DB connected!');
        
        app.listen(port, () => console.log(`Server is listening on port ${port}...`))
    })
    .catch(err => console.log(`Cannot connect to DB!`))
