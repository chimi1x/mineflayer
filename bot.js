const mineflayer = require('mineflayer');

// Configuration
const config = {
  username: 'testbot', // Bot username
  password: '',        // Bot password (leave empty for offline mode)
  host: 'chimi1x.aternos.me', // Server IP
  port: 42898,         // Server port
  version: '1.16.1'     // Minecraft version
};

// Create the bot
const bot = mineflayer.createBot(config);

// Bot events
bot.on('login', () => {
  console.log('Bot has logged in!');
});

bot.on('chat', (username, message) => {
  if (username !== bot.username) {
    console.log(`<${username}> ${message}`);
  }
});

bot.on('error', (err) => {
  console.error('Error:', err);
});

bot.on('end', () => {
  console.log('Bot has disconnected. Reconnecting...');
  setTimeout(() => {
    bot = mineflayer.createBot(config);
  }, 5000); // Auto-reconnect after 5 seconds
});

// Anti-AFK (sneak every 30 seconds)
setInterval(() => {
  if (bot.antiAfk.enabled) {
    bot.setControlState('sneak', true);
    setTimeout(() => {
      bot.setControlState('sneak', false);
    }, 1000);
  }
}, 30000);

// Chat messages (repeat every 60 seconds)
const messages = [
  '69',
  'chimi is the best!',
  'I Like to Play sixUwU'
];

let messageIndex = 0;
setInterval(() => {
  if (bot.chatMessages.enabled) {
    bot.chat(messages[messageIndex]);
    messageIndex = (messageIndex + 1) % messages.length;
  }
}, 60000);
