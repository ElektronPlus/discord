import Discord from 'discord.js'
import { DiscordListener } from '../classes/DiscordListener'
import { config } from '../config'
import createLogger from '../utils/logger'

const log = createLogger()

export default class ScamMessageListener implements DiscordListener {
  registerListener (client: Discord.Client): void {
    client.on('messageCreate', async (message) => {
      if (this.hasForbiddenWords(message.content)) {
        log.info(`Removed ${message.author.id}: ${message.content}`)
        message.delete()
      }
    })
  }

  hasForbiddenWords(string: string) {
    return config.forbiddenMessages.some(forbiddenMessage => string.includes(forbiddenMessage))
  }
}