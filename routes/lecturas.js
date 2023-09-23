let express = require('express');
let router = express.Router();

const Lectura = require('../model/lectura.model');

/* GET lecturas */
router.get('/', function(req, res, next) {
  Lectura.find({}).then(resp => {
    let numeroLecturas = resp.length || 0;
    let max = -100;
    let min = 100;
    let sumaLecturas = 0;
    resp.forEach(lectura => {
      sumaLecturas += lectura.temperatura;
      if (lectura.temperatura > max) max = lectura.temperatura;
      if (lectura.temperatura < min) min = lectura.temperatura;
    });
    let respuesta = {
      max: max > -100 ? max : 0,
      min: min < 100 ? min : 0,
      media: numeroLecturas ? sumaLecturas / numeroLecturas : 0,
      total: numeroLecturas
    };
    res.status(200).json(respuesta);
  }).catch(err => {
    res.status(500).json({ status: 'error', error: err });
  });
});

/* POST lecturas */
router.post('/', function(req, res, next) {
  Lectura.create(req.body).then(resul => {
    res.status(200).json({ status: 'Ok', datos: resul });
  }).catch(err => {
    res.status(500).json({ status: 'error', error: err });
  });
});

module.exports = router;
