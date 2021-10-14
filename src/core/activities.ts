import createLogger from '../utils/logger'
import { config } from '../config'
import { randomItem } from '../utils/utils'

import { ActivityOptions, ClientUser } from 'discord.js'

const log = createLogger()

export function getRandomActivity (): ActivityOptions {
  log.info('Generated a random bot status.')

  return { name: `lekcji ${randomItem(config.activity.items)}`, type: 'LISTENING' }
}

export default async function activitySetter (user: ClientUser): Promise<void> {
  if (config.activity.display) {
    user.setActivity(getRandomActivity())

    setInterval(() => user.setActivity(getRandomActivity()), config.activity.interval)
  }
}
