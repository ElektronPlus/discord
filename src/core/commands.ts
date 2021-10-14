import createLogger from '../utils/logger'
import { config } from '../config'

import { Guild, Interaction } from 'discord.js'

const log = createLogger()

/**
 * Guild slashCommands are prefered over global ones, as they're dynamic. Global commands are refreshed every 1 hour. In that time, function isn't usable (it gives `Invalid interaction application command` error). Over that, if we would commands.create() every time we run a bot, **same would apply**.
 * @tutorial https://canary.discord.com/developers/docs/interactions/slash-commands#registering-a-command
*/
export async function createGuildSlashCommands (guild: Guild): Promise<void> {
  const commands = guild?.commands

  for (const command of config.slashCommands) {
    commands?.create({
      name: command.name,
      description: command.description
    })
  }

  log.info(`[${guild.name}] Created /commands.`)
}
/**
 * Replies to slash commands specified in config.
 */
export async function replyToSlashCommand (interaction: Interaction): Promise<void> {
  // Make sure that interaction is a command
  if (!interaction.isCommand()) {
    return
  }

  for (const command of config.slashCommands) {
    if (interaction.commandName === command.name) {
      interaction.reply(command.reply)
      log.info(`[${interaction.guild?.name}] Replied to interaction (${interaction.commandName}).`)
    }
  }
}
