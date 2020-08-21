const express = require('express');
const server = express();

server
.use(express.static("public"))
.use(express.urlencoded({ extended: true }))
.get('/', (req, res) => {
    return res.sendFile(__dirname + '/views/landing-page.html')
})
.get('/index.html', async (req, res) => {
    return res.sendFile(__dirname + '/views/index.html');
})
.listen(3000);