const express = require('express');


const reserve = require('./controllers/reserve')
const shareUrl = require('./controllers/shareUrl')
const check = require('./controllers/check')
const cancel = require('./controllers/cancel')

const app = express();

app.use(express.json())


app.use('/share_url', shareUrl)

app.use('/reserve', reserve)

app.use('/check', check)

app.use('/cancel', cancel)


module.exports = app;
