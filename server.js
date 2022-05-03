console.log('Hello')

const express = require('express');
const app = express();

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
      console.log("request made", req.params.hash)
    res.send('True')
  })
  // Hash value is req.params.hash

