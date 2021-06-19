const Discord = require("disc.script")
const gateway = new Discord.Gateway()
gateway.start("ODQ2Nzg3MDM4MTg2ODMxOTE0.YK0l4g.cCWOEqnombSvvWIVJTDurb8ty4c")

Discord.Event.on("ready", async () => {
    console.log("ready")
})

Discord.Event.on("message", async message => {
    if (message.content === "Hello") {
        setTimeout(() => message.delete(), 5000)
    }
})