'use strict'

import mqConnection from './config/rabbitmq/client'

export const produceMsg = (msg: string) => {
    mqConnection.channel.assertQueue('queue', {durable: false})
    mqConnection.channel.sendToQueue('queue', new Buffer(msg))
}

