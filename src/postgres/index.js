const express = require('express')
const db = require('./queries')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) 

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
    app.get('/poems', db.getPoems)
  })

  