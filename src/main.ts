import 'dotenv/config'
import Discord from 'discord.js'
import createLogger from './logger'

const log = createLogger()

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS]
})

client.once('ready', () => {
  log.info('Bot is ready.')
})

client.login(process.env.DISCORD_TOKEN)
