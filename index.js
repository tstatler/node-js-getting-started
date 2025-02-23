const express = require('express')
const { appendFile } = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000


const app = express()

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.post('/', function(req, res) {
  res.send("POSTED!")
})