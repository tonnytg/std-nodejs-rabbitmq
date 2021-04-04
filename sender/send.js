// arquivos de referência
// https://github.com/rabbitmq/rabbitmq-tutorials/tree/master/javascript-nodejs/src

let amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(error0, connection) {});

// Conecta no rabbitmq
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    // Cria um canal para trablhar
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        // criar a mensagem a ser usada
        let queue = 'hello';
        let msg = 'Hello world';

        // cria a opção de como o canal vai trabalhar
        channel.assertQueue(queue, {
            durable: false
        });
        // buferiza a mensagem e envia pelo canal
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
    });

// Definimos um tempo para encerrar a conexão
setTimeout(function() {
    connection.close();
    process.exit(0)
}, 500);
});