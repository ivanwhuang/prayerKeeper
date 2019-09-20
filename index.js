const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
// testing out currents API
const CurrentsAPI = require('currentsapi');
const currentsapi = new CurrentsAPI(
  'oMxslh2IevzwrbQtSjMwZ83rB3nh_Of1Cg7s9ut2nFlx6RfO'
);

// Test call with currentsAPI

// currentsapi
//   .search({
//     language: 'en',
//     category: 'world'
//   })
//   .then(res => {
//     console.log(res);
//   });

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
      useCreateIndex: true,
      useFindAndModify: false
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
app.use('/api/keeper', require('./routes/api/keeper'));
app.use('/api/prayers', require('./routes/api/prayers'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
