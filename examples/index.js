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
const BOT_TOKEN = '1033454067:AAHZSmzUacocaXJYn2y9eGr44YC7YZ6HU6k'

app.use(
  require('../index')({
    path: '/',
  }),
);

// Example route throwing requested status code
app.get('/checkstatus', (req, res) =>
  res.sendStatus(200),
);

// const Telegraf = require('telegraf')

// const bot = new Telegraf(BOT_TOKEN);

// bot.start(ctx => ctx.reply('Welcome!'))
// bot.help(ctx => ctx.reply('Send me a sticker'))
// bot.on('sticker', ctx => ctx.reply('👍'))
// bot.hears('hi', ctx => ctx.reply('Hey there'))
// bot.launch()

//  let thanh = "+84902898858"
//  let nexty_urgent = "99999999"

// plivo.urgent_call(nexty_urgent, thanh)

