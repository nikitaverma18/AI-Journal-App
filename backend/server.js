const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
// const entryRoutes = require('./routes/entryRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


  mongoose.connect(process.env.MONGO_URI, )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/entries', entryRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});