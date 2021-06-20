const fetch = require("node-fetch")
const emit = require("events")
const { messageref, message } = require("../../payload.json")

class CreateMessage {
    constructor(cid, data) {
        if (!cid || !data) throw new MessageError("Fields missing")
        this._c = cid
        this.data = data
    }
    async send(content) {
        try {
            let m = {
                content: content,
                tts: false,
                embeds: [],
                allowed_mentions: null,
                message_reference: null,
                components: null,
            }
            if (this.data.tts) m.tts = true
            if (this.data.embeds) m.embeds = this.data.embeds
            if (this.data.allowed_mentions) m.allowed_mentions = this.data.allowed_mentions
            if (this.data.message_reference) m.message_reference = this.data.message_reference
            if (this.data.components) m.components = this.data.components

            m = JSON.stringify(m)

            /*if (this._ref && this._tts) {
                m = {
                    "content": this._content,
                    "tts": true,
                    "message_reference": this._ref
                }
                m = `{"content": "${this._content}", "tts": true, "message_reference": "${this._ref}"}`
            } else if (this._ref) {
                m = {
                    "content": this._content,
                    "tts": false,
                    "message_reference": this._ref
                }
                m = `{"content": "${this._content}", "tts": false, "message_reference": "${this._ref}"}`
            } else if (this._tts) {
                m = {
                    "content": this._content,
                    "tts": true
                }
                m = `{"content": "${this._content}", "tts": true}`
            } else {
                m = {
                    "content": this._content,
                    "tts": false
                }
                m = `{"content": "${this._content}", "tts": false}`
            }*/

            console.log(m)

            const sendm = await fetch(`https://discord.com/api/v9/channels/${this._c}/messages`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bot ${process.env.TOKEN}`
                },
                body: m
            })
            return sendm.json()
        } catch {
            throw new MessageError("An error occured during sending message")
        }
    }
}

class MessageError extends Error {
    constructor(state) {
        super(state)
    }
}

module.exports = {
     CreateMessage,
     MessageError
}
