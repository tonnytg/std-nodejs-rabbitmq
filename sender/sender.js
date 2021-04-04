// arquivos de referência
// https://github.com/rabbitmq/rabbitmq-tutorials/tree/master/javascript-nodejs/src

const express = require('express')
const app = express()
const bodyParser = require("body-parser"); // necessario para pegar os dados do body
let path = require('path');
let ejs = require('ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false})); // necessario para pegar os dados do body

let amqp = require('amqplib/callback_api');

function SendMessage(message){
    // Conecta no rabbitmq
    amqp.connect('amqp://rabbitserver', function(error0, connection) {
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
            let msg = message; // coletada do form

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
            // process.exit(0)
        }, 500);
    });
};

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {
    SendMessage(req.body.message)
    res.render("index")
})

app.listen(3000)