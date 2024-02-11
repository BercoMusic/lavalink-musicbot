require("dotenv/config");
require("./src/bot");
const express = require('express');
const app = express();
const port = 3000;

// Web sunucu

app.get('/', (req, res) => {

res.sendStatus(200);

});

app.listen(port, () => {

console.log(`Sunucu ${port} numaralı bağlantı noktasında yürütülüyor.`);

});

client.login(process.env.token)
