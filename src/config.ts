import 'dotenv/config'
import { getLuckyNumberInfo } from './api/elektronplus'

export const api = {
  elektronplus: 'https://elektronplusplus-76445.firebaseio.com/.json'
}

export const config = {
  displayFunnyActivity: true,
  token: process.env.DISCORD_TOKEN,
  activity: {
    display: true,
    interval: 1000000,
    items: [
      'historii XX i XXI w.',
      'wychowania do cnót niewieścich',
      'katechezy'
    ]
  },
  slashCommands: [
    {
      name: 'github',
      description: '🤖 Sprawdź kod źródłowy bota, zasugeruj swoje zmiany lub zgłoś błąd',
      reply: {
        content: 'https://github.com/ElektronPlus/discord',
        ephemeral: true
      }
    },
    {
      name: 'numerek',
      description: '📅 Sprawdź, czy masz dziś szczęście! Wyświetla szczęsliwy numerek',
      reply: {
        content: await getLuckyNumberInfo(),
        ephemeral: true
      }
    },
    {
      name: 'aplikacja',
      description: '📲 Pobierz aplikację Elektron++ na swój telefon',
      reply: {
        content: 'https://play.google.com/store/apps/details?id=pl.krystian_wybranowski.elektronPlus',
        ephemeral: true
      }
    },
    {
      name: 'spolecznosciowy',
      description: '✨ Dołącz do serwera społecznościowego szkoły',
      reply: {
        content: 'https://discord.gg/jrDxSTE',
        ephemeral: true
      }
    },
    {
      name: 'facebook',
      description: '💕 Obserwuj nas na Facebooku',
      reply: {
        content: 'https://www.facebook.com/zgelektronik/ & https://www.facebook.com/suelektron/',
        ephemeral: true
      }
    }
  ],
  triggers: [
    {
      name: '+1',
      reply: [
        'oj byczku **+1**',
        'o kurde **+1**',
        'proste że **+1**',
        '**+1** bo masz rację',
        '**+1** ode mnie',
        'popieram **+1**'
      ]
    }
  ]
}
