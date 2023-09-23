
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lecturaSchema = new Schema({
  sensor: String,
  temperatura: Number,
  fecha: Date
},{ strict: false, versionKey: false });

module.exports = mongoose.model('Lectura', lecturaSchema);
