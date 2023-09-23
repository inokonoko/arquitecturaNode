
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const cargaBD = async function() {
  const bdUrl = 'mongodb+srv://admin:P455w0rd!@unedcluster.qb5mo5j.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
  const connection = mongoose.connect(bdUrl, {dbName: 'lecturas'})
    .then(() => {
      console.log('Conectado a base de datos');
    }).catch(err => {
      console.log('Error de conexión: ', err);
    });

  return connection;
}

module.exports = { cargaBD };
