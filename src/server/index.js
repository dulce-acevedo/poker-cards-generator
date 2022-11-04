const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4000;

const fs = require('fs');
const cardRouter = require('./routes/card');

app.use(cors())

app.get('/', (req,res) => {
  res.send({
    exampleMessage: "Dulce is the best"
  })
})

app.use('/card', cardRouter);

app.listen(port, () =>
  console.log('Example app listening on port 4000!'),
);