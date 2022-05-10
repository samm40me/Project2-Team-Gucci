//console.log("May node be with you")
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded( {extended:true}))
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb-connection-string', (err, client) => {
    // ... do something here
  })

app.listen(3000, function(){
    console.log('listen on 3000')
})

app.get('/', (req, res) => {
//    res.send('Hello World')
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
    console.log(req.body)
})
