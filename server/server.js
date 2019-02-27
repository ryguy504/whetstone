const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Import express and routes


const port = 5000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


require('./routes/LocationSearch')(app);



app.get('/', (req, res) => {
  res.send('PORT 5000');
  
});



app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});