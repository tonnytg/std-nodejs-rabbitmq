## Demo RabbitMQ and NodeJS

Olá esse repo é apenas um teste de NodeJS e RabbitMQ<br/>
Eu utilizei [a demo do site do RabbitMQ](https://github.com/rabbitmq/rabbitmq-tutorials/tree/master/javascript-nodejs) + Express e adaptei<br/>
Coloquei o express com um form, para receber o post da mensage. Com isso consigo ter um Environment de teste com um Forms.<br/>
Deixei tudo com docker-compose, assim da para trabalhar com containers distribuidos.

A ideia é bem simples, acessar o index, enviar mensagem onde o Sender manda para o RabbitMQ na fila `hello` e processa isso depois com o receiver.

### About
We have here three containers:
- RabbitMQ Server -> vai ficar ouvindo
- Receiver -> Vai bater no RabbitMQ e processar o que está na fila
- Sender -> Vai enviar para fila os pedidos


### How to use
Clone this repo:<br/>
run `docker-compose up --build -d`

### Check Processed Message
Check logs `docker-compose logs receiver`

### Troubleshooting
Check docker-compose containers are running:<br/>
`docker-compose ps`

If someone stoped or exit 1, run: <br/>
`docker-compose logs <NAME>`


