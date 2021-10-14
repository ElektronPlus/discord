import createLogger from './utils/logger'
import { config } from './config'

import Discord from 'discord.js'
import { createGuildSlashCommands, replyToSlashCommand } from './core/commands'
import { replyToTrigger } from './core/triggers'
import activitySetter from './core/activities'

const log = createLogger()

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
})

client.once('ready', async () => {
  log.info('Client: Ready')

  if (client.user != null) {
    activitySetter(client.user)
  }

  /** Create slash commands for every guild. This doesn't create global commands. */
  client.guilds.cache.forEach(async guild => await createGuildSlashCommands(guild))
})

client.on('messageCreate', async (message) => {
  replyToTrigger(message)
})

client.on('interactionCreate', async (interaction) => {
  replyToSlashCommand(interaction)
})

client.login(config.token)
