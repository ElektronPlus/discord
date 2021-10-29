import createLogger from '../utils/logger'
import { api } from '../config'

import fetch from 'node-fetch'

const log = createLogger()

export async function getElektronPlusJSON () {
  return await fetch(api.elektronplus)
    .then(async res => await res.json())
}

export async function getLuckyNumberInfo () {
  const data = await getElektronPlusJSON()
  log.info('Got ElektronPlus JSON')

  const info = `${data.LuckyNumber.info} ${data.LuckyNumber.number}`

  return info
}
