const express = require('express');

const app = express();

app.listen(4000, function(){
	console.log("Listening at port \"4000\" ");
});

app.post('/api/:name/', function(req, resp){
	console.log("Get request");
	resp.send("hello "+req.params.name);
});