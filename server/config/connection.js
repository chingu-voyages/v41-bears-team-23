const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_URI ||  MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;