require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser')

 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  // res.send('Hello World')
  res.json('Hello World')
});

app.get('/usuario', function (req, res) {
  // res.send('Hello World')
  res.json('get usuario')
});

app.post('/usuario', function (req, res) {

  let body = req.body;//Primero pasa por el body-parser. recibe cualquier payload funciona para post put y delete 
  // res.json('post usuario');

  if( body.nombre === undefined ) {

    res.status( 400 ).json( {
      ok:false,
      mensaje: 'El nombre es necesario'
    });

  } else {
    
    res.json( {
      persona: body
    } );
  }
});

app.put('/usuario/:id', function (req, res) {

  let id = req.params.id;
  // res.send('Hello World')
  res.json({ 
    id //id: id "id": "123456"
  })
});

app.delete('/usuario', function (req, res) {
  // res.send('Hello World')
  res.json('delete usuario')
});
 
app.listen( process.env.PORT, () => {
  console.log(' Escuchando el puerto', process.env.PORT);
});