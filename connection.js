console.log("------------------------------------connection.js loaded....");
const mongoose = require('mongoose');

//mongoose.promise = global.promise;

mongoose.connect('mongodb://localhost/fb_videos');

mongoose.connection.once('open', function(){
	console.log('------------------------------------connection has been made....');
}).on('error', function(error){
	console.log('------------------------------------connection error:', error);
});

module.exports = mongoose;