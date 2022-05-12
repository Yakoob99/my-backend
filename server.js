console.log('Server has started')

const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000, function() {
    console.log('listening on 3000')
  })

  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


  app.get('/DBhash/:hash', (req, res) => {
      console.log("request made:", req.params.hash)
 // Hash value is req.params.hash
      
  MongoClient.connect("mongodb://localhost:27017")
  .then(client => {
    // ...
    const db = client.db('DBhash')
    const hashCollection = db.collection('Hash')

   
    db.collection('Hash').find().toArray()
      .then(results => {
        results= results.map((value) => value.Hash) 
        console.log(results)
        console.log(results.includes(req.params.hash))
        console.log(req.params.hash)
        res.send((results.includes(req.params.hash)))
        
      })
      .catch(error => console.error(error))

  })
  .catch(console.error)

    


  })
 

