const Discord = require("disc.script")
const gateway = new Discord.Gateway()
gateway.start("ODQ2Nzg3MDM4MTg2ODMxOTE0.YK0l4g.iwJ_yqj8tBUhBAL5ibt35hjOvkY")

Discord.Event.on("ready", async () => {
    console.log("ready")
})

Discord.Event.on("message", message => {
    console.log("got it")
    if (message.content === "!rules") {
        console.log(message.author.username)
        message.channel.send("Hello")
    }
})