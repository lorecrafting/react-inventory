const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const Items = require('./db/models/Items.js');
const bodyParser = require('body-parser');

app.use(bodyParser({extended:true}))


app.use(express.static(path.join(__dirname, '../build')))

app.get('/', () => {
  res.sendFile('../build/index.html')
})

app.get('/items', (req, res) => {
  Items
    .fetchAll()
    .then( items => {
      res.json(items.serialize())
    }) 
    .catch( err => {
      console.log('error', err)
    })
})

app.post('/item/new', (req, res) => {
  console.log('was server /item/new called', req.body)
  const item = req.body
  Items
    .forge(item)
    .save()
    .then( result => {
      return Items.fetchAll()
    })
    .then( newItems => {
      res.json(newItems.serialize())
    })
    .catch( err => {
      console.log("err", err)
    })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})

