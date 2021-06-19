# Welcome to Disc.Script

## Overview

**Disc.Script is a new and modern Discord API Wrapper for JavaScript/NodeJS.** It works via the [Discord API](https://discord.dev).

## Features

Currently, Disc.Script can connect to the Discord Gateway, Identify via a bot token and send messages in a channel. We are actively working on Reactions, Replies and Receiving messages right now, and will be released soon when they are ready.

## Usage

```javascript
const Discord = require("disc.script");
const gateway = new Discord.Gateway();

Discord.Event.on("ready", () => {
  console.log("ready");
});

gateway.start("token");
```

## **Installation: `npm i disc.script`**
