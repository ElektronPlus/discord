import createLogger from '../utils/logger'
import { config } from '../config'

import { ActivityOptions, ClientUser } from 'discord.js'

const log = createLogger()

export function getRandomActivity (): ActivityOptions {
  log.info('Generated a random bot status.')

  const randomItem = config.activity.items[Math.floor(Math.random() * config.activity.items.length)]
  return { name: `lekcji ${randomItem}`, type: 'LISTENING' }
}

export default async function activitySetter (user: ClientUser): Promise<void> {
  if (config.activity.display) {
    user.setActivity(getRandomActivity())

    setInterval(() => user.setActivity(getRandomActivity()), config.activity.interval)
  }
}
