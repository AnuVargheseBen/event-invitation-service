const mongoose = require('mongoose')

function connect() {
  mongoose.connect('mongodb://localhost:27017/eventInvitation', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    
  });
 
}

export { connect }
