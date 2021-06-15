const { CreateMessage, MessageError } = require("../Actions/CreateMessage")
const events = require("events")

const MessageEvent = new events.EventEmitter()

class Message {
    constructor(content, cid, tts=false, ref=false) {
        if (!content) throw new MessageError("Missing message content")
        if (!cid) throw new MessageError("Missing message channel")
        this._message = new CreateMessage(content, cid, tts, ref)
    }
    async send() {
        try {
            this._message = await this._message.send()
            MessageEvent.emit("messageSent")
            return this._message
        } catch {
            throw new MessageError("An error occured during sending message")
        }
    }
}

module.exports = {
    Message,
    MessageEvent
}