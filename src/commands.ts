export const slashCommands = [
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
    description: '📅 Sprawdź, czy dzisiaj masz szczęście! Wyświetla szczęsliwy numerek',
    reply: {
      content: '',
      ephemeral: true
    }
  },
  {
    name: 'aplikacja',
    description: '📲 Pobierz aplikację Eletron++ na swój telefon',
    reply: {
      content: 'https://play.google.com/store/apps/details?id=pl.krystian_wybranowski.elektronPlus',
      ephemeral: true
    }
  }
]

export const triggers = [
  {
    name: '+1',
    reply: 'Oj byczku **+1**'
  }
]