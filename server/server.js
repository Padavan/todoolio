const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
const router = express.Router();

const dbRoute = 'mongodb://eel:3513641a@ds033170.mlab.com:33170/td';

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// get method
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// update method
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate({ id: id }, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// delete method
router.delete('/deleteData', (req, res) => {
  const id = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// create method
router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, name, status } = req.body;

  if ((!id && id !== 0) || !name) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS'
    });
  }
  data.id = id;
  data.name = name;
  data.status = status;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
