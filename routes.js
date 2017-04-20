var store = require('./storeData');
var hapi = require('hapi');
var path = require('path');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    },
    {
        method: 'GET',
        path: '/{name}',
        handler: function (request, reply) {
            reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
        }
    },
    {
        method: 'GET',
        path: '/pages',
        handler: function (request, reply) {
            reply.view('FB_Accuracy_ShowVideosData');
        }
    },
    {
        method: 'GET',
        path: '/fb/videos/agents',
        handler: function (request, reply) {
            store.getAgentsData().then(function(result){
                reply(JSON.stringify(result, null, 2));
            });
            
        }
    },
    {
        method: 'POST',
        path: '/fb/videos/agents',
        handler: function (request, reply) {
            var payload = request.payload;
            store.saveAgentsData(payload);
            reply('Agents data saved Successfully!');
        }
    }
];