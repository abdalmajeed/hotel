const path = require('path')
const fs = require('fs')
const Yoti = require('yoti')

const CLIENT_SDK_ID = process.env.YOTI_CLIENT_SDK_ID;
const PEM_KEY = fs.readFileSync(process.env.YOTI_KEY_FILE_PATH);


const yotiClient = new Yoti.Client(CLIENT_SDK_ID, PEM_KEY);

module.exports = {
  yotiClient
}