import createLogger from '../utils/logger'

import { Guild, Interaction, ChatInputApplicationCommandData, InteractionReplyOptions } from 'discord.js';
import { getLuckyNumberInfo } from '../api/elektronplus'

const log = createLogger()

const slashCommands: ChatInputApplicationCommandData[] = [
    {
      name: 'github',
      description: '🤖 Sprawdź kod źródłowy bota, zasugeruj swoje zmiany lub zgłoś błąd',
    },
    {
      name: 'numerek',
      description: '📅 Sprawdź, czy masz dziś szczęście! Wyświetla szczęsliwy numerek',
    },
    {
      name: 'aplikacja',
      description: '📲 Pobierz aplikację Elektron++ na swój telefon',
    },
    {
      name: 'spolecznosciowy',
      description: '✨ Dołącz do serwera społecznościowego szkoły',
    },
    {
      name: 'facebook',
      description: '💕 Obserwuj nas na Facebooku',
    },
]

const replies: {[commandName: string]: InteractionReplyOptions} = {
  github: {
    content: 'https://github.com/ElektronPlus/discord',
    ephemeral: true,
  },
  numerek: {
    content: await getLuckyNumberInfo(),
    ephemeral: true
  },
  aplikacja: {
    content: 'https://play.google.com/store/apps/details?id=pl.krystian_wybranowski.elektronPlus',
    ephemeral: true
  },
  spolecznosciowy: {
    content: 'https://discord.gg/jrDxSTE',
    ephemeral: true
  },
  facebook: {
    content: 'https://www.facebook.com/zgelektronik/ & https://www.facebook.com/suelektron/',
    ephemeral: true
  }
} 



/**
 * Guild slashCommands are prefered over global ones, as they're dynamic. Global commands are refreshed every 1 hour. In that time, function isn't usable (it gives `Invalid interaction application command` error). Over that, if we would commands.create() every time we run a bot, **same would apply**.
 * @tutorial https://canary.discord.com/developers/docs/interactions/slash-commands#registering-a-command
*/
export async function createGuildSlashCommands (guild: Guild): Promise<void> {
  const commands = guild?.commands

  for (const command of slashCommands) {
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

  for (const command of slashCommands) {
    if (interaction.commandName === command.name) {
      interaction.reply(replies[command.name])
      log.info(`[${interaction.guild?.name}] Replied to interaction (${interaction.commandName}).`)
    }
  }
}
