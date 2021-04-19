const express = require('express');

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


app.listen(5111, () => {
  console.log('listening on port 5111');
})