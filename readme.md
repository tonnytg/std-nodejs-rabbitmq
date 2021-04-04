## Demo RabbitMQ and NodeJS

Olá esse repo é apenas um teste de NodeJS e RabbitMQ<br/>
Eu utilizei a demo do site do RabbitMQ + Express adaptador com Docker-Compose<br/>
Com isso consigo ter um Environment de teste com um Forms.

A ideia é bem simples, acessar o index, enviar mensagem onde o Sender manda para o RabbitMQ na fila `hello` e processa isso depois com o receiver.

### About
We have here three containers:
- RabbitMQ Server
- Receiver
- Sender


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


