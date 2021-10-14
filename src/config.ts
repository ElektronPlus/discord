import 'dotenv/config'

export const config = {
  displayFunnyActivity: true,
  token: process.env.DISCORD_TOKEN,
  activity: {
    display: true,
    interval: 1000000,
    items: [
      'matematyki',
      'biologi',
      'programowania',
      'polskiego',
      'angielskiego',
      'niemieckiego',
      'geografii',
      'baz danych',
      'religi',
      'fizyki',
      'histori',
      'pojazdów samochodowych',
      'diagnostyki',
      'chemii',
      'informatyki',
      'SEO'
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
        content: '',
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
      reply: 'Oj byczku **+1**'
    }
  ],
}