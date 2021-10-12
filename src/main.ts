import 'dotenv/config'
import Discord from 'discord.js'
import createLogger from './logger'

const log = createLogger()

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
})

client.once('ready', () => {
  log.info('Bot is ready.')
})

client.on('messageCreate', message => {
  if (message.content === '+1' && message.channel.type) {
    message.channel.send('Oj byczku **+1**')
  }
})

client.login(process.env.DISCORD_TOKEN)
