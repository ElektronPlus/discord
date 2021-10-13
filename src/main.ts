import 'dotenv/config'
import Discord from 'discord.js'
import createLogger from './logger'
import { slashCommands, triggers } from './commands'

const log = createLogger()

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
})

client.once('ready', () => {
  log.info('Client: Ready')

  // Guild commands update instantly. We recommend you use guild commands for quick testing, and global commands when they're ready for public use. (https://canary.discord.com/developers/docs/interactions/slash-commands#registering-a-command q)

  const guildId = '896713182326968351'
  const guild = client.guilds.cache.get(guildId)
  let commands

  if (guild != null) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }

  for (const command of slashCommands) {
    commands?.create({
      name: command.name,
      description: command.description
    })
    log.info(`Command created: ${command.name} - ${command.description}`)
  }
})

client.on('messageCreate', message => {
  for (const trigger of triggers) {
    if (message.content === trigger.name) {
      message.channel.send(trigger.reply)
      log.info(`Triggered: ${trigger.name} - ${Object.entries(message)}`)
    }
  }
})

client.on('interactionCreate', async (interaction) => {
  // Make sure that interaction is a command
  if (!interaction.isCommand()) {
    return
  }

  for (const command of slashCommands) {
    if (interaction.commandName === command.name) {
      interaction.reply(command.reply)
      log.info(`Replied to interaction: ${Object.entries(interaction)}`)
    }
  }
})

client.login(process.env.DISCORD_TOKEN)
