console.log("------------------------------------storeData.js loaded....");

const videosAgent = require('./models/videosAgent');

exports.saveAgentsData = function (agentData){
	/*var char = new videosAgent({
		agentName: 'agent1'
	});*/
	console.log("In saveAgentsData()", JSON.stringify(agentData));
	var char = new videosAgent(agentData);

	char.save().then(function(){
		console.log('Agent record saved in Mongo DatagetAgentsDatabase !!!');
	});
};

exports.getAgentsData = function (){
	return videosAgent.find({agentName : "Rubesh Kumar"})
				.then(function(result){
					//console.log("result", result);
					return result;
				});
};

