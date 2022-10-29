const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4000;

const fs = require('fs');
const flickrRouter = require('./flickr');

app.use(cors())

app.get('/', (req,res) => {
  res.send({
    exampleMessage: "Dulce is the best"
  })
})

app.use('/search', flickrRouter);

app.listen(port, () =>
  console.log('Example app listening on port 4000!'),
);