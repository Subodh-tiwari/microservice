"use strict"

import psql from './config/postgres/client'

export class User extends psql.Model<User> {
    get tableName() {
        return 'users';
    }

    get hasTimestamps() {
        return true;
    }
}

export const Users = User.collection();
