const aoijs = require('aoi.js')
  
 const bot = new aoijs.Bot({
   token: "TOKEN",//Token do seu bot
   prefix: "PREFIXO",//Prefixo do seu bot
   intents: "all",

    respondOnEdit: {
    commands: true,
    alwaysExecute: true,
    time: 60000,
   }
   
 });


bot.onMessage({
  guildOnly: true
})

bot.onInteractionCreate();

bot.status({
  text: "Embed Generator| kaz#2448",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "https://discord.gg/kazstore",
  type: "PLAYING",
  time: 12
})

bot.onMessageUpdate()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, `./commands/`)