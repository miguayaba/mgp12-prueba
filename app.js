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

const direccion = '20.119.0.42'; // Escuchar en todas las interfaces de red

servidor.listen(direccion, () => {
  console.log(`Servidor en funcionamiento en https://${direccion}`);
});