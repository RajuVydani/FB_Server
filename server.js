'use strict';
console.log("------------------------------------server.js loaded....");
const Hapi = require('hapi');
const store = require('./storeData');
const routes = require('./routes');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

/*server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.route({
    method: 'POST',
    path: '/fb/videos/agents',
    handler: function (request, reply) {
        var payload = request.payload;
        store.saveAgentsData(payload);
        reply('Agents data saved Successfully!');
    }
});*/

server.register(require('vision'), function(err){
    if(err){
        throw err;
    }

    // initialize routes
    server.route(routes);

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});