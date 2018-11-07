const http = require('http');
const url = require("url");
const querystring = require('querystring')


const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page);
    // if (page != "/") {
    //     res.writeHead(404)
    //     res.end()
    // }
    // else {

    //commentaire

    res.writeHead(200, { "Content-type": "text/html" });
    res.write(`
        <!DOCTYPE html>
        <html>
    <head>
    <meta charset="utf-8" />
    <title>node js</title>
    </head>    
    <body>
    <p>hello <i>the </i>world !</p>
    </body>
        </html>
    `)
    res.end()
    // }

});
server.listen(3000)