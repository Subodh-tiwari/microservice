'use strict';

import * as Hapi from 'hapi'
import routes from './routes'
import mqChannel from './config/rabbitmq/client'


const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route(routes);

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
