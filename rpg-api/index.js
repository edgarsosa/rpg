const express = require('express');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();


app.get('/', function (req, res) {
  const msg = (process.env.AWS_ACCESS_KEY_ID) ? process.env.AWS_ACCESS_KEY_ID : 'Hello World!';
  res.send(msg);
});
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});