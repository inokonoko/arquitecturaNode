let express = require('express');
let path = require('path');
let logger = require('morgan');


const mongoose = require('./bin/mongoose');
mongoose.cargaBD();

let lecturasRouter = require('./routes/lecturas');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/lecturas', lecturasRouter);

app.use((req, res) => {
  res.status(404).send('<h1>404');
})

module.exports = app;
