import 'dotenv/config'
import Discord from 'discord.js'

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
})

client.once('ready', async () => {
  client.channels.cache.forEach(channel => {
    const guild = channel.guild
    channel.permissionOverwrites.cache.forEach(permission => {
      if (permission.type == 'role') {
        guild.roles.fetch(permission.id)
          .then(role => {
            if (role.name != '@everyone' && permission.deny.any([Discord.Permissions.FLAGS.SEND_MESSAGES, Discord.Permissions.FLAGS.ATTACH_FILES, Discord.Permissions.FLAGS.CONNECT, Discord.Permissions.FLAGS.SPEAK])) {
              console.log(`${channel.parent?.name} - ${channel.name}: ${role.name} ma wyłączone permisje`)
            }
          })
      }
    })
  })
})

client.login(process.env.DISCORD_TOKEN)