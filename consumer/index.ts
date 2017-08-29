'use strict';

import controller from './controller'

import * as Redis from 'ioredis'

import {
    config
} from './config/postgres/config'

const redis = new Redis()

import mqConnection from './config/rabbitmq/client'

export const main = () => {
    mqConnection.channel.assertQueue('queue', {durable: false})
    mqConnection.channel.consume('queue', (msg) => {
        console.log("Received", msg.content.toString())
        redis.get(msg.content.toString(), (err, result) => {
            const value = JSON.parse(result)
            controller.create(value)
            .then((data) => console.log(`Result data : ${data}`))
            .catch((err) => {
                throw err
            })
        });
    }, {noAck: true})
}



