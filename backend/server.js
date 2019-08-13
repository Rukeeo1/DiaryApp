const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db')
// const userRouter = require('./routes/users');
const morgan = require('morgan');



app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));

connectDB();


app.use('/api/users', (req,res) => res.send('hello boo'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on Port ' + `${port}`);
  });
  
