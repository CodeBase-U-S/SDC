const express = require('express');

const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/api', router);

module.exports = app;
