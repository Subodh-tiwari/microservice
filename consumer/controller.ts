"use strict"

import {
    User,
    Users
} from './models'

import * as Bluebird from 'bluebird'

import {
    Model
} from 'typings'

const controller = {
    create(data: Model.User): Bluebird<boolean> {
        return new User (data)
        .save()
        .then(data => true)
        .catch(err => {
            console.log("Error while inserting :", err)
            return false
        })
    }
}

export default controller
