//
// ###############################################
// AH 2022 ZainCash Product Development Test
// ###############################################
//

const express = require('express');
const path = require('path');
const config = require('../config');
const routes = require('./routes');

// init express
const app = express();

// app config
app.use(routes);
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.join(__dirname, '..') + '\\public'));

// when server is running
app.listen(config.port, () =>
  console.log(`Hi! the app is listening at http://localhost:${config.port}`)
);
