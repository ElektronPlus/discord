import Discord from 'discord.js'

export abstract class DiscordListener {
  abstract registerListener (client: Discord.Client): void
}