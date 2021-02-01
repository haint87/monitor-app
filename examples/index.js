// const socketIoPort = 2222;
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);

const plivo = require('./../src/helpers/plivo-call')
const healthChecker = require('./../src/helpers/health-checker');
const validate = require('./../src/helpers/validate');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});


// const Client = require('bitcoin-core');

// This is optional. If your server uses socket.io already, pass it to config as `webserver` along with it's port.
// const socketio = require('socket.io')(socketIoPort);

const botname = 'botmonitor1';
const BOT_TOKEN = '1033454067:'

app.use(
  require('../index')({
    path: '/',
  }),
);

// Example route throwing requested status code
app.get('/checkstatus', (req, res) =>
  res.sendStatus(200),
);
