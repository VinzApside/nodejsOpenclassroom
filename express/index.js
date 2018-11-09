const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    res.send("Hello world !")
})
    .get('/autrePage', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');

        res.send("Hello world sur une autre page !")
    })

    .get('/nom/:name', (req, res) => {
        const nomUtilise = req.params.name
        res.setHeader('Content-Type', 'text/plain');
        res.send(`salut ${nomUtilise}`)
    })


    .use((req, res, next) => {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('Page introuvable')
    })

    .listen(3000, () => {
        console.log('listen on port 3000');
    })