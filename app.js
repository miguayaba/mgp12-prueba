const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1> Hola Mundo... Estamos conectados desde Google Cloud</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
