const Discord = require("disc.script")
const gateway = new Discord.Gateway()
gateway.start("ODQ2Nzg3MDM4MTg2ODMxOTE0.YK0l4g.C2LaZzdchrsX_wiPTSfJmJMU5_I")

Discord.Event.on("ready", async () => {
    console.log("ready")
})

Discord.Event.on("message", message => {
    if (message.content === "Hello") {
        message.react("✅")
        console.log("yes")
    }
})