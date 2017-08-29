import * as amqp from 'amqplib/callback_api'
const queueName = 'queue'
let mqConnection = {
    queue: null,
    channel: null,
    isConnected: false,
}


if(mqConnection.isConnected == false) {
    amqp.connect('amqp://root:prabodh@localhost:5672', (err, queue) => {
        if(err) {
            throw err
        } else {
            mqConnection = (<any>Object).assign(mqConnection, {
                isConnected: true,
               queue: queue
            })
            queue.createChannel((err, channel) => {
                mqConnection = (<any>Object).assign(mqConnection, {
                    channel: channel
                })
            })
        }
    })
}
export default mqConnection
