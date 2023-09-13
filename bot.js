// Package/File integration.
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// New client for the bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Make sure the bot is online
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);