import createLogger from '../utils/logger'
import { config, api } from '../config'

import fetch from 'node-fetch'

const log = createLogger()

export async function getElektronPlusJSON () {
  return fetch(api.elektronplus)
    .then(res => res.json())
}

export async function getLuckyNumberInfo() {
  const data = await getElektronPlusJSON()
  const info = `${data.LuckyNumber.info} ${data.LuckyNumber.number}`

  return info
}