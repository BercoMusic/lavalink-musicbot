require("dotenv/config");
require("./src/bot");
const { Client, Intents,Collection } = require('discord.js');
const fs = require('fs')
const ayarlar = require("./ayarlar.json")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}
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
