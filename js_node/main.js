const http = require('http');
const { json } = require('stream/consumers');
let counter1 = 0;
let counter2 = 0;
const server = http.createServer((req, res) => {


    if (req.url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })
        counter1++;

        res.end(`<a href="/about"> go to about page</a><h3>${counter1}</h3>`)
    } else
        if (req.url === '/about') {
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            })
            counter2++;

            res.end(`<a href="/"> go to the main page</a><h3>${counter2}</h3>`)
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('<h1>ERROR 404</h1>');
        }

})

const port = '3000';

server.listen(port);