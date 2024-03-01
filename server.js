const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send(``)
})

function keepAlive() {
  server.listen(3000, () => { 
    console.log('\x1b[36m%s\x1b[0m','[MODMAIL] ModMail.js is Running!')
    console.log('\x1b[36m%s\x1b[0m','[MODMAIL] Version: V1.2.1 [OFFICIAL]')
    console.log('\x1b[35m%s\x1b[0m','[SETUP] If you have a problem with the bot, please read SETUP.md or DM the Developer: T.F.A#1887')
    console.log('\x1b[37m%s\x1b[0m','---------------------------------------------------------')
    console.log('\x1b[31m%s', '[WARNING] If this project is stucked in the "[SERVER] Server.js is loading..." part, Go read SETUP.md for help!');
    console.log('\x1b[33m%s','[SERVER] Server.js is loading...')
  ;});
}

module.exports = keepAlive;