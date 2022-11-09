const mongoose = require('mongoose');

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://localhost:27017/blogDatabase'

mongoose.connect(process.env.MONGODB_URI ||  MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;