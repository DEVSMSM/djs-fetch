# djs-fetch


**djs-fetch:** ``its A powerful utility for efficiently fetching various Discord resources. Simplify your bot development by easily retrieving users, guilds, channels, and more with a consistent and reliable interface.``

<p>
    <a href="https://www.npmjs.com/package/djs-fetch" target="_blank"><img src="https://nodei.co/npm/djs-fetch.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
<a href="https://www.npmjs.com/package/djs-fetch" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/djs-fetch?logo=npm&style=flat-square"></a>

- **Download**
```
npm i djs-fetch@latest
```
- **How To Add it**
```
const Fetch = require("djs-fetch")
const { Client } = require("discord.js")
const client = new Client()

client.fetch = new Fetch(client)
```

# Examples

// Assuming the client has already been initialized

// Fetch a user by ID
const userId = "123456789012345678";
const user = await client.fetch.user({ userId });

if (user) {
  console.log(`Fetched user: ${user.username}`);
} else {
  console.log("User not found.");
}
