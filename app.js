const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hola Wilmer desde Azure')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})