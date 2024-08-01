const TelegramBot = require('node-telegram-bot-api');
const token = '7298912434:AAF1cxvQS6CthF8YP3qqVuUzjiQA-a8BXB8';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hey, whats up?');
});

bot.onText(/\/exit/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Sorry to see you going. Bye for now.');
});

bot.on('message', (msg) => {
});

bot.on('error', (err) => {
  console.log(err);
});

console.log('Bot is running!');

