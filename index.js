const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// get db connection string
const db = config.get('mongoURI');

// Init Middleware
// Body parser used to be a separate package, but now it's included with express
app.use(express.json({ extended: false }));

// connect to Mongo
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

connectDB();

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/prayerKeeper', require('./routes/api/prayerKeeper'));
app.use('/api/prayerRequest', require('./routes/api/prayerRequest'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
