import pino from 'pino'

export default function createLogger (): pino.Logger {
  return pino({
    prettyPrint: {
      translateTime: 'SYS:standard'
    }
  })
}
