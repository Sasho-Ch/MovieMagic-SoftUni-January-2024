const express = require('express');

const routes = require('./routes.js')
const configHandlebars = require('./config/configHandlebars.js');
const configExpress = require('./config/confixExpress.js');

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes)

app.listen(port, () => console.log(`Server is listening on port ${port}...`))