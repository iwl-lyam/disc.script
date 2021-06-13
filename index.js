require('dotenv').config()
const events = require('events')

const { Gateway, GatewayTermination, GatewayEvent } = require("./src/Gateway/Gateway")

const Event = new events.EventEmitter()
GatewayEvent.on("heartbeat", () => Event.emit("heartbeat")) 
GatewayEvent.on("GatewayError", type => Event.emit("GatewayError", type)) 
GatewayEvent.on("ready", () => Event.emit("ready"))

module.exports = {
    Gateway,
    Event
}