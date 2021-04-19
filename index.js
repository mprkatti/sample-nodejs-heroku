const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const greetingRoute = require('./routes/greeting');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use('/api', greetingRoute);

app.get('/', (req, res) => {

  return res.json({ message: 'Hello, world!!' });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})