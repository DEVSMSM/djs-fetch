# djs-fetch


**djs-fetch:** ``its A powerful utility for efficiently fetching various Discord resources. Simplify your bot development by easily retrieving users, guilds, channels, and more with a consistent and reliable interface.``

<p>
    <a href="https://www.npmjs.com/package/djs-fetch" target="_blank"><img src="https://nodei.co/npm/djs-fetch.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
<a href="https://www.npmjs.com/package/djs-fetch" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/djs-fetch?logo=npm&style=flat-square"></a>

# Download
```
npm i djs-fetch@latest
```
# How To Add it
```js
const Fetch = require("djs-fetch")
const { Client , GatewayIntentBits } = require("discord.js")
const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    })

client.fetch = new Fetch(client)
```
# OR Add it to CustomClient Class
```js
const Fetch = require("djs-fetch")
const { Client , GatewayIntentBits } = require("discord.js")

class CustomClient extends Client {
  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
this.fetch = new Fetch(this);
 }
}
```
# Examples

### 1. Fetch User & Users:
```js
// Fetch a user by ID
const userId = "123456789012345678";
const user = await client.fetch.user({ userId }); // or await client.fetch.user(userId)

if (user) {
  console.log(`Fetched user: ${user.username}`);
} else {
  console.log("User not found.");
}
```
```js
// Fetch all users from a cache by guild ID
const guildId = "987654321098765432";
const users = await client.fetch.users();

if (users) {
  console.log(`Fetched ${users.size} users from guild ${guildId}`);
} else {
  console.log("Users not found.");
}
```
### 2. Fetch Channel & Channels:
```js
// Fetch a channel by channel ID
const channelId = "123456789012345678";
const channel = await client.fetch.channel({ channelId });

if (channel) {
  console.log(`Fetched channel: ${channel.name}`);
} else {
  console.log("Channel not found.");
}
```
```js
// Fetch all channels from a guild by guild ID
const guildId = "987654321098765432";
const channels = await client.fetch.channels({ guildId });

if (channels) {
  console.log(`Fetched ${channels.size} channels from guild ${guildId}`);
} else {
  console.log("Channels not found.");
}
```
### 3. All methods
```js
Fetch {
// GUILD 
guild(guildId)
guilds() // No Need
// EMOJI
emoji(emojiId)
emojis(guildId)
// INVITE
invite(inviteCode)
invites(guildId)
// ROLE
role(guildId , roleId)
roles(guildId)
// MEMBER
member(guildId , userId)
members(guildId)
// MESSAGE
message(channelId, messageId)
messages(channelId)
// VOICESTATE
voiceState(guildId , userId)
voiceStates(guildId)
// BAN
ban(guildId, userId)
bans(guildId)
// THREAD
thread(channelId , threadId)
threads(channelId)
// REACTION
reaction(channelId , messageId) {
// REACTION USER
user(userId)
users() // No Need
}
}
