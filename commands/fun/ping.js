const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
	// Setting up basic command properties
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		// How the bot responds
		await interaction.reply('Pong!');
	},
};