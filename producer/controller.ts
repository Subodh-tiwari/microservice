'use strict';

import {
    User,
    Users
} from './models'

import {
    Model
} from 'typings'

import * as Bluebird from 'bluebird'

const controller = {
    getUser(name: string): Bluebird<Model.User> {
        return Users
        .query(qb => qb.where('name', '=', name))
        .fetch()
        .then(data => data.toJSON())
        .then(data => data[0])
        .catch(err => {
            console.log("Err while fetching user : ", err)
            return {}
        })
    }
}

export default controller
