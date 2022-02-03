import Discord from 'discord.js'
import { DiscordListener } from '../classes/DiscordListener'
import { config } from '../config'
import createLogger from '../utils/logger'

const log = createLogger()

export default class UserPresenceUpdateListener implements DiscordListener {
    registerListener(client: Discord.Client): void {
        client.on('presenceUpdate', (oldPresence, newPresence) => {
            // oldPresence musi tutaj być, bo inaczej jeżeli poprzedni status miał jakieś przekleństwo, to będzie mu wysyłało wiadomość z prośbą o zmianę
            if (newPresence.activities.length == 0) return;
            if (newPresence.activities[0].type != 'CUSTOM') {
                if (this.hasCurseWords(newPresence.activities[0].name) || this.hasCurseWords(newPresence.activities[0].state) || this.hasCurseWords(newPresence.activities[0].details)) {
                    log.info(`Detected curse words in new presence of ${newPresence.user.username}`)
                    newPresence.user.send("Cześć! Zauważyłem, że masz w swoim statusie konta niecenzuralne słowa. Aby uniknąć problemów, zmień proszę status na inny.\nJeżeli uważasz, że otrzymałeś tę wiadomość przez pomyłkę, skontaktuj się z Administratorem szkolnego Discorda.")
                        .catch(err => {
                            if (err.message.includes("Cannot send messages to this user")) log.info(`Cannot send curse word warning to this user: ${newPresence.user.username}`)
                            else log.error(err);
                        });
                }
            } else if (this.hasCurseWords(newPresence.activities[0].state)) {
                log.info(`Detected curse words in new presence of ${newPresence.user.username}`)
                newPresence.user.send("Cześć! Zauważyłem, że masz w swoim statusie konta niecenzuralne słowa. Aby uniknąć problemów, zmień proszę status na inny.\nJeżeli uważasz, że otrzymałeś tę wiadomość przez pomyłkę, skontaktuj się z Administratorem szkolnego Discorda.")
                    .catch(err => {
                        if (err.message.includes("Cannot send messages to this user")) log.info(`Cannot send curse word warning to this user: ${newPresence.user.username}`)
                        else log.error(err);
                    });
            }
        })
    }
    hasCurseWords(string: string) {
        return config.curseWords.some(forbiddenWord => string.includes(forbiddenWord))
    }
}