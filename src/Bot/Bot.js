const fetch = require("node-fetch")

class Bot {
    start(token=process.env.token) {
        process.env.TOKEN = token
        fetch('https://discord.com/api/v9/gateway')
            .then(response => response.json())
            .then(data => process.env.ONLINE = true);
    }
}

module.exports = {
    Bot
}