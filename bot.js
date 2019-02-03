const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'ZeRvX Niver Die',
     details: `ZeRvX Niver Die`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `ZeRvX Niver Die`,
    application_id: '377479790195769345',
     assets: {
        small_image: `541481203224674319`,
        small_text: 'ZeRvX Niver Die',
        large_image: `541481153723498496`,
        large_text: `ZeRvX Niver Die` }

  }
    });
});
اقولها

client.login("NDMxNTUzMTE1MjkzMjIwODc2.DzgHKQ.fyab4J9AFHgbRfM1oUdOQm2Gnbo");