const mineflayer = require('mineflayer');

// Configuration
const bot = mineflayer.createBot({
  username: 'UwU', // Bot username
  host: 'chimi1x.aternos.me', // Server IP
  port: 42898, // Server port
  version: '1.16.1' // Minecraft version
});

// Bot events
bot.on('login', () => {
  console.log('Bot has logged in!');
});

// Handle errors
bot.on('error', (err) => {
  console.error('Error:', err);
});

// Handle disconnections
bot.on('end', () => {
  console.log('Bot has disconnected. Reconnecting in 5 seconds...');
  setTimeout(() => {
    createBot(); // Reconnect after 5 seconds
  }, 5000);
});

// Sneak every 10 seconds
setInterval(() => {
  bot.setControlState('sneak', true); // Start sneaking
  console.log('تربع');

  setTimeout(() => {
    bot.setControlState('sneak', false); // Stop sneaking after 1 second
    console.log('كعد يرتاح خطيه.');
  }, 1000); // Sneak for 1 second
}, 10000); // Repeat every 10 seconds

// Jump every 5 seconds
setInterval(() => {
  bot.setControlState('jump', true); // Jump
  console.log('البوت ديكمز بوياايييي!');

  setTimeout(() => {
    bot.setControlState('jump', false); // Stop jumping
  }, 500); // Jump for 0.5 seconds
}, 5000); // Repeat every 5 seconds
