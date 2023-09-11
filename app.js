const http = require('http');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo Azure\n');
});

const puerto = 80; // Escucha en el puerto 80
const direccion = 'mgpanelv12.azurewebsites.net/'; // Reemplaza 'tudominio.com' con tu URL personalizada

servidor.listen(puerto, direccion, () => {
  console.log(`Servidor en funcionamiento en https://${direccion}/`);
});