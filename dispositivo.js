const host = '127.0.0.1';
const port = 3000;
const ruta = 'lecturas';
const nombreSensor = 'st101';

function enviaDatos() {
  fetch(`http://${host}:${port}/${ruta}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      sensor: nombreSensor,
      temperatura: Math.round(Math.random() * 29 - 5),
      fecha: new Date()
    })
  }).then(data => data.json()).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });

  setTimeout(enviaDatos, 9e5);
}

enviaDatos();

