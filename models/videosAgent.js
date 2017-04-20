console.log("------------------------------------videosAgent.js loaded....");
const mongoose = require('../connection');
const Schema = mongoose.Schema;

const videosAgentSchema = new Schema({
	agentName: String,
	jobId: String,
	team: String,
	tagSelected: String,
	decisionDate: String
});

const videosAgent = mongoose.model('videosAgent', videosAgentSchema);

module.exports = videosAgent;