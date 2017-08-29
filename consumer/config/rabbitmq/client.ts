
import * as amqp from 'amqplib/callback_api'
const queueName = 'queue'
let mqConnection = {
    queue: null,
    channel: null,
    isConnected: false,
}

import {
    main
} from '../../index'


if(mqConnection.isConnected == false) {
    amqp.connect('amqp://root:prabodh@localhost:5672', (err, queue) => {
        if(err) {
            throw err
        } else {
            mqConnection = (<any>Object).assign(mqConnection, {
                isConnected: true,
               queue: queue
            })
            console.log("Connection created")
            queue.createChannel((err, channel) => {
                mqConnection = (<any>Object).assign(mqConnection, {
                    channel: channel
                })
                main()
            })
        }
    })
}
export default mqConnection
