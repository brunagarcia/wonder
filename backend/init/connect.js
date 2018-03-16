/** 
 *  @file:  connect.js
 *  @desc:  Connection and configuration for mongoose
*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wonder');

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log("Connected to db at /data/db/")
});

module.exports = db