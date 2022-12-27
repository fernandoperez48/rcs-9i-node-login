const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection OK'))
  .catch(error => console.error(error));

  const PORT = process.env.PORT || 8000;

  var cors = require('cors');
app.use(cors());

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
  });