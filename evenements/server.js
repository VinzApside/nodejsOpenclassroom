const http = require('http');
const EventEmitter = require('events').EventEmitter;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hi');
});

server.on('close', () => {
    console.log("byebye");
});


const jeu = new EventEmitter();

jeu.on('begin', (message) => {
    console.log(message);
})

jeu.on('gameover', (message) => {
    console.log(message);
})

jeu.emit('begin', "let's start!")
jeu.emit("gameover", 'game over !')

server.listen(3000);

//server.close();