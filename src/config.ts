import 'dotenv/config'

export const api = {
  elektronplus: 'https://elektronplusplus-76445.firebaseio.com/.json'
}

export const config = {
  displayFunnyActivity: true,
  token: process.env.DISCORD_TOKEN,
  activity: {
    display: true,
    interval: 100000,
    items: [
      'historii XX i XXI w.',
      'wychowania do cnót niewieścich',
      'katechezy'
    ]
  },
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
  ],
  forbiddenMessages: [
    'nitro',
    'steam store',
    'open the link'
  ]
}
