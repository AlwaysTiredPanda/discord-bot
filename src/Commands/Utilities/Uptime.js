const Command = require('../../Structures/Command');
const { ReactionUserManager } = require('discord.js');
const ms = require('ms');

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['ut'],
			description: 'This provides the current uptime of the bot.',
			category: 'Utilities'
		});
	}
    async run(message) {
        message.channel.send(`My uptime is \`${ms(this.client.uptime, {long: true})}\``);
    }
}