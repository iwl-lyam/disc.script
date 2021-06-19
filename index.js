require('dotenv').config()
const events = require('events')

const { Gateway, GatewayTermination, GatewayEvent } = require("./src/Gateway/Gateway")
const { CreateMessage, MessageError } = require("./src/Util/Actions/CreateMessage")
const { Message, MessageEvent } = require("./src/Util/Components/Message")

const Event = new events.EventEmitter()
GatewayEvent.on("heartbeat", () => Event.emit("heartbeat")) 
GatewayEvent.on("GatewayError", type => Event.emit("GatewayError", type)) 
GatewayEvent.on("ready", () => Event.emit("ready"))
GatewayEvent.on("guildCreate", (guilds, amount) => Event.emit("guildCreate", guilds, amount))
GatewayEvent.on("message", message => Event.emit("message", message))
MessageEvent.on("messageSent", () => Event.emit("messageSent"))

module.exports = {
    Gateway,
    CreateMessage,
    Message,
    Event
}