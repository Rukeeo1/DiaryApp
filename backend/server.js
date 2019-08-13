const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/users');
const morgan = require('morgan');



app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.use('/api/users', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on Port ' + `${port}`);
  });
  
