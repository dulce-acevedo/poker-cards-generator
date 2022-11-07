const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4000;

const fs = require('fs');
const cardRouter = require('./routes/card');
const randomRouter = require('./routes/random');

app.use(cors())
app.use('/card', cardRouter);
app.use('/random', randomRouter);
app.get("/", (req, res) => {
  res.send(
    {serverMessage: "Welcome to the card-generator server"}
  )
})

app.listen(port, () =>
  console.log('Express server listening on port 4000'),
);