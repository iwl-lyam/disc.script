const fetch = require("node-fetch")
const WebSocket = require("ws")
const { op2 } = require("../payload.json")
const events = require("events")
const { Guild } = require("../Util/Components/Guild")
const { Message } = require("../Util/Components/Message")

const GatewayEvent = new events.EventEmitter()

class Gateway {
    constructor() {
        this._i = false
        this._guilds = []
    }
    async start(token=process.env.token) {
        try {
            process.env.TOKEN = token
            fetch('https://discord.com/api/v9/gateway')
                .then(response => response.json())
                .then(data => {
                    const gtarget = data.url + "/?v=9&encoding=json"
                    const socket = new WebSocket(gtarget)
                    socket.on("message", message => {
                        const response = JSON.parse(message)
                        if (response.op === 11 && this._i) {
                            socket.send(JSON.stringify(op2).replace("dododododdoododododododooddoodododododoododododododododododoodododododoododododododododododoo", process.env.TOKEN))
                            this._i = false
                        }
                        if (response.op === 0) {
                            console.log(response)
                            if (response.t === "READY") {
                                process.env.READY = true
                                GatewayEvent.emit("ready")
                            } else if (response.t === "GUILD_CREATE") {
                                this._guilds.push(new Guild(response.d))
                                GatewayEvent.emit("guildCreate", this._guilds, this._guilds.length)
                            } else if (response.t === "MESSAGE_CREATE") {
                                const message = new Message(data=response.d)
                                GatewayEvent.emit("message", message)
                            } else if (response.t === "MESSAGE_DELETE") {
                                GatewayEvent.emit("messageDelete", reponse.d.id, response.d.channel_id, response.d.guild_id)
                            }
                        }
                        if (response.op === 10) {
                            const heartbeat = response.d.heartbeat_interval
                            setTimeout(() => {
                                socket.send('{"op":1,"d":null}')
                                GatewayEvent.emit("heartbeat")
                                this._i = true
                                setInterval(() => {
                                    socket.send('{"op":1,"d":null}')
                                    GatewayEvent.emit("heartbeat")
                                }, heartbeat)
                            }, heartbeat * Math.random())
                        }
                        if (response.op === 9) {
                            socket.close()
                            throw new GatewayTermination("RateLimited")
                        }
                    })
                        
                });
            } catch {
                throw new GatewayTermination()
            }
    }
}

class GatewayTermination extends Error {
    constructor(catched) {
        GatewayEvent.emit("GatewayError", "terminated")
        super(catched + ": Gateway limits exceded. Connection terminated.")
    }
}

module.exports = {
    Gateway,
    GatewayTermination,
    GatewayEvent
}