require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = require('./app');

const port = process.env.PORT || 5000;

https.createServer({
  key: fs.readFileSync(path.join(__dirname, './keys', 'server-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './keys', 'server-cert.pem')),
}, app).listen(port);

console.log(`Server running on https://localhost:${port}`);