const express = require('express');
const mongoose = require('mongoose');


// Starting the app
const app = express();


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  


// Connecting to the database
mongoose
  .connect('mongodb://127.0.0.1:27017/node-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
   .then(() => console.log('DB connected!'))
   .catch(err => {
     console.log(`DB Connection Error: ${err.message}`);
   });


// Adding our model
require('./src/models/Product');


// Rotas
app.use('/api', require('./src/routes'));

