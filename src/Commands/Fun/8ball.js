const Command = require('../../Structures/Command');

const answers = [
    'Maybe',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreamns.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'Never!',
    'Fouishdglodsjoohar',
    'Pfft.',
    'Sorry, bucko.',
    'Hell yes!',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly',
    'Never, ever, ever.',
    'There is a small chance.',
    'Why did you ask me that?',
    'What is wrong with you?',
    'Yes!'
];

module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['8ball'],
			description: 'This will answer all of your questions!',
			category: 'Fun'
		});
    }

    async run(msg, ...question) {
        return msg.reply(question.join(' ').endsWith('?') ? 
            `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
            `🎱 That doesn't seem to be a question, please try again.`);
    }

};