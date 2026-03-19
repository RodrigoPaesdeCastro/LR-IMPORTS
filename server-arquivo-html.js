const http = require('http'); 
const fs = require('fs');     

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url; 

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (url === '/' || url === '/index.html') {
        fs.readFile('./public/index.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Erro ao carregar a página</h1>');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else if (url === '/teclado' || url === '/teclado.html') {
        fs.readFile('./public/teclado.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Erro ao carregar a página</h1>');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else if (url === '/mouse' || url === '/mouse.html') {
        fs.readFile('./public/mouse.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Erro ao carregar a página</h1>');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else if (url === '/headset' || url === '/headset.html') {
        fs.readFile('./public/headset.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Erro ao carregar a página</h1>');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else if (url === '/monitor' || url === '/monitor.html') {
        fs.readFile('./public/monitor.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Erro ao carregar a página</h1>');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else if (url === '/mousepad' || url === '/mousepad.html') {
        fs.readFile('./public/mousepad.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>Erro ao carregar a página</h1>');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('<h1>Página não encontrada</h1>');
    }
});
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});