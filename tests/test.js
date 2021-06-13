const Discord = require("disc.script")
const gateway = new Discord.Gateway()
gateway.start("ODQ2Nzg3MDM4MTg2ODMxOTE0.YK0l4g.m19JgalYDG3E4FaSEPGLXI0F8To")

Discord.Event.on("heartbeat", () => {
    console.log("Heartbeated.")
})
Discord.Event.once("ready", () => {
    console.log("ready")
})