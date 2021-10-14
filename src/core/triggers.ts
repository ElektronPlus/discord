import { Message } from 'discord.js'
import { config } from '../config'
import createLogger from '../utils/logger'
import { randomItem } from '../utils/utils'

const log = createLogger()

/**
 * Replies to trigger specified in config.
 */
export async function replyToTrigger (message: Message): Promise<void> {
  for (const trigger of config.triggers) {
    if (message.content === trigger.name) {
      message.channel.send(randomItem(trigger.reply))
      log.info(`[${message.guild?.name}] Replied to trigger.`)
    }
  }
}
