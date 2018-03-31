const RiveScript = require('rivescript')

const bot = new RiveScript()

const chat = userMessage => {
    return new Promise((resolve, reject) => {
        bot.loadFile(`brain.rive`, _ => {
            // console.log('brain ready')
            bot.sortReplies()
            resolve(bot.reply(`local-user`, userMessage))
        }, error => reject(error))
    })
}

chat("tell me the temperature and turn on the led please")
    .then(reply => console.log(reply))
    .catch(err => console.log(err))