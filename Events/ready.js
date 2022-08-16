const client = require('../index.js');

client.on('ready', () => {
  client.user.setActivity("FairyShop By ʕ´•ᴥ•`ʔσ”#0001", {
    type: "STREAMING",
    url: "https://www.twitch.tv/anime"
});
  
  client.logger.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=', 'ready');
  client.logger.ready(`${client.user.tag}, ready to watch [${client.users.cache.size}] users in [${client.guilds.cache.size}] servers.`, 'ready');
  client.logger.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=', 'ready');
});