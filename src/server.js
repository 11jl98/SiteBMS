const express = require('express')
const path = require('path')

const server = express()

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname, 'public')));

server.use(express.json())

server.get('/version', (req, res) => {
    return res.status(200).json({
        version: '1.0.0'
    })
})

server.listen(3000, () => console.log('http://localhost:3000'))