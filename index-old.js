// 074 Introducción a la sección
// Configuración de la BD
// PUT GET POST DELETE lo básico en servicios REST
// Librería Express
// Express Server o Express REST Server
// Robo 3T Gestor de base de datos. Consulta de documentos y colecciones
// Configuración Global de la aplicación, ayuda para pasar a producción sea transparante.
// Que sepa cuando se esta en producción o desarrollo
// Subida a heroku y github

// Temas de la sección: 

// Aquí cubriremos varios temas como: 

// Instalación y pruebas con MongoDB
// Peticiones HTTP
// Get
// Put
// Post
// Delete
// Aprender sobre códigos de error HTTP
// Códigos de error en Express
// Archivos para la configuración global
// Tips importantes en Postman

// Nota de actualización sobre descarga de MongoDB

// Saludos, en el siguiente video hablamos de la instalación de MongoDB, pero en la página ya no está claro, en dónde está el enlace, así que aquí se los dejo para que puedan tenerlo a la mano.

// https://www.mongodb.com/download-center/community

// 077 Instalación de MongoDB
// Mongo se comunica con la librería de mongoose
// Instalar MongoDb
// opción - Comunity Server
// Binary: Installation Instructions
// Seguir los pasos que dice en la página
// Set up the MongoDB environment
// Crear carpeta para guardar las bases de datos
// establecer el Path que mongo dedb trabaje la base de datos
// Ejecutar mongod.exe

// 079 Iniciando el proyecto – RESTServer
// npm init
// npm install express --save
// crear carpeta server - archivo server.
// PostMan - localhost:3000 resultado hello world en formato text/html; charset=utf-8
// Pero se trabajara en formato JSON
// Cambiar res.send('Hello World') por res.json
// PostMan probar el cambio, arrojará formato html. Solución: porque en la terminal uno ejecuta node/server/server
// Para actualizar los cambios nodemon server/server
// resultado ahora es un application/json; charset=utf-8

// 080 Peticiones HTTP - GET - PUT - POST – DELETE
// La petición PUT para que acepte la url se debe especificar el path /:id parametro que se quiere recibir por url
// app.put('/usuario/:id'
// Para obtener el parametro los id deben ser iguales :id y  req.params.id
// let id = req.params.id;
// Salida res.json({id})
// PostMan - post - body - x-www-form.urlencoded - nombre edad
// Se manda la info - no funcionará.
// Obtener el payload - la info del post que se esta mandando desde la aplicacion a nuestro servidor REST.
// ¿Como obtener la info del POST?
// Existe un paquete que permite procesar toda esa info y la serializa en un objeto JSON, para que sea facilmente procesada en las peticiones POST.
// https://www.npmjs.com/package/body-parser
//npm i body-parser --save
// server.js: usar el body-parser
// post - let body = req.body;
// res.json( { body} );
// Respuesta de PostMan
// {
//   "persona": {
//       "nombre": "Humberto",
//       "edad": "40"
//   }
// }

// Códigos de respuestas HTTP
// Es muy importante que nuestros servicios siempre retornen un código de respuesta dependiendo de lo que suceda
/*
HTTP/1.1 Status Codes
Code Name Notes
100 Continue
101 Switching Protocols
Successful
200 OK Everything is normal
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
Redirection
300 Multiple Choices
301 Moved Permanently Update your URL, this has moved for good.
302 Found
303 See Other
304 Not Modified
305 Use Proxy
306 Unused
307 Temporary Redirect This is temporarly moved, don't update your bookmarks.
Client Error
400 Bad Request Server didn't understand the URL you gave it.
401 Unauthorized Must be authenticated
402 Payment Required Not used really
403 Forbidden Server refuses to give you a file, authentication won't help
404 Not Found A file doesn't exist at that address
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout Browser took too long to request something
409 Conflict
410 Gone
411 Lengh Required
412 Precondition Failed
413 Reqeust Entity Too Large
415 Unsupported Media Type
416 Request Range Not Satisfiable
417 Expectation Failed
Server Error
500 Internal Server Error Something on the server didn't work right.
501 Not Implemented
502 Bad Gateway
503 Service Unavailable Too busy to respond to a client
504 Gateway Timeout
505 HTTP Version Not Supported
Creative Commons Attribution-Share Alike 3.0 Unported
*/

// 082 Usando códigos de respuesta HTTP en Express
// res.status( 400 ).json
// En postman - post -/usuario - quitar del body nombre - Send - muestra el status 400

// 083 Creando un archivo de configuracion global
