const fetch = require("node-fetch")
const WebSocket = require("ws")

class Gateway {
    start(token=process.env.token) {
        process.env.TOKEN = token
        fetch('https://discord.com/api/v9/gateway')
            .then(response => response.json())
            .then(data => {
                const gtarget = data.url + "/?v=9&encoding=json"
                const socket = new WebSocket(gtarget)
                socket.on("message", message => {
                    console.log(JSON.parse(message))
                    const response = JSON.parse(message)
                    if (response.op === 10) {
                        const heartbeat = response.d.heartbeat_interval
                        setTimeout(() => {
                            socket.send('{"op":1,"d":null}')
                            setInterval(() => {
                                socket.send('{"op":1,"d":null}')
                            }, heartbeat)
                        }, heartbeat * Math.random())
                    }
                })
                    
            });
    }
}

module.exports = {
    Gateway
}