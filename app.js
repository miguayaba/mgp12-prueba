const http = require('https');

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Aquí puedes agregar código para manejar el error, como registrarlo o finalizar la aplicación.
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Aquí puedes agregar código para manejar el error, como registrarlo o finalizar la aplicación.
});

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo Azure\n');
});

const puerto = 80; // Escucha en el puerto 80
const direccion = 'mgpanelv12.azurewebsites.net'; // Reemplaza 'tudominio.com' con tu URL personalizada

servidor.listen(puerto, direccion, () => {
  console.log(`Servidor en funcionamiento en https://${direccion}/`);
});