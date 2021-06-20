const Discord = require("disc.script")
const gateway = new Discord.Gateway()
gateway.start("")

Discord.Event.on("ready", async () => {
    console.log("ready")
})

Discord.Event.on("message", message => {
    if (message.content === "!rules") {
        console.log(message.author.username)
    }
})