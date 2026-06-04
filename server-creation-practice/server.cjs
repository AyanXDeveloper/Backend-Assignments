const fs = require('fs');
const http = require('http');
const path = require('path');

// <==== Creating Server ====>

const server = http.createServer((req, res) => {

    console.log(`Request for ${req.url} received.`);

    if (req.url === '/') {
        res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
        res.end('Welcome to the about page!');
    } else if (req.url === '/contact') {
        res.end('Welcome to the contact page!');
    } else if (req.url === '/services') {
        res.end('Welcome to the services page!');
    } else if (req.url === '/products') {
        res.end('Welcome to the products page!');
    } else {
        res.writeHead(404, {
            "Content-type": "text/html"
        })
        res.end("This page does not exist")
    }
});

// <==== Running Server ====>

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const readFile = fs.readFileSync("random.txt", "utf-8")
// console.log(readFile);

// fs.writeFileSync("abc.txt", "This is a new file created using fs module in Node.js named abc.txt")

// const readTextFile = fs.readFileSync("abc.txt", "utf-8")
// console.log(readTextFile);

// fs.readFile("random.txt", "utf-8", (err, data) => {

//     if (err) {
//         console.log(err);
//         return;
//     } else if (data) {
//         return console.log(data);
//     }

// })