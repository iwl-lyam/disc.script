const Discord = require("disc.script")
const gateway = new Discord.Gateway()
gateway.start("ODQ2Nzg3MDM4MTg2ODMxOTE0.YK0l4g.cCWOEqnombSvvWIVJTDurb8ty4c")

Discord.Event.on("ready", async () => {
    console.log("ready")
    const message = await new Discord.Message("Beep!", "794211647333597189").send()
    console.log("sent")
    console.log(message)
})
Discord.Event.on("heartbeat", () => {
    console.log("dundun")
})
Discord.Event.on("guildCreate", (guilds, amount) => {
    console.log(amount)
})