const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config
const dbURI = 'mongodb+srv://user2003:harsha%401234@cluster0.wl46l6w.mongodb.net/compiler?retryWrites=true&w=majority';

// Resolving Deprecation Warnings
mongoose
  .set('useNewUrlParser', true)
  .set('useUnifiedTopology', true)
  .set('useFindAndModify', false)
  .set('useCreateIndex', true);

// Connect to Mongo
mongoose
  .connect(dbURI)
  .then(() => console.log('Mongoose Connected'))
  .catch((err) => console.log(err));

var cors = require('cors');

app.use(cors());

// Use Routes
app.use('/api/files', require('./routes/api/files'));
app.use('/api/run', require('./routes/api/run'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 3000;

//wait for a connection
app.listen(port, () => console.log(`Server started on port ${port}`));
