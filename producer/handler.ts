'use strict';

import controller from './controller'

import * as Redis from 'ioredis'
const redis = new Redis()

import {
    Request,
    ReplyNoContinue
} from 'hapi'

import * as utils from './utils'

const handler = {
    set (request: Request, reply: ReplyNoContinue) {
        try{
            const name = request.query.name
            const password = request.query.password
            const data = {
                name,
                password
            }
            const key = String(Date.now())
            redis.set(key, JSON.stringify(data))
            utils.produceMsg(key)
            reply("succesful").code(206);
        } catch(err) {
            throw err
        }
        },

    get (request: Request, reply: ReplyNoContinue) {
            const name = request.query.name
            controller.getUser(name)
            .then((data) => reply(data.password))
        }
}

export default handler
