const { CreateMessage } = require("../Actions/CreateMessage")

class Channel {
    async constructor(id) {
        const channel = await fetch(`https://discord.com/api/v9/channels/${id}`)
        this={...this,...channel.json()}
    }
    async send(content, data=null) {
        data.content = content
        const message = await new CreateMessage(this.id, data).send()
        return message
    }
}

module.exports = {
    Channel
}
