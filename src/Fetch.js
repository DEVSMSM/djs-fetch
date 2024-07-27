class Fetch {
  constructor(client) {
    this.client = client;
  }

  async user(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const userId = typeof input === 'object' && input !== null ? input.userId : input;
  if (typeof userId !== 'string') {
    return undefined;
  }
if(!userId) throw new Error("Please Provide userId")
 const user = await this.client.users.fetch(userId);
      return user;
    } catch (error) {
      return undefined;
    }
  }
  
  
async users(input) {
    try {
  if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      
      const users = client.users.cache;
      return users;
    } catch (error) {
      return undefined;
    }
  }

  async channel(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const channelId = typeof input === 'object' && input !== null ? input.channelId : input;
  if (typeof channelId !== 'string') {
    return undefined;
  }
if(!channelId) throw new Error("Please Provide channeId")
const channel = await this.client.channels.fetch(channelId);
      return channel;
    } catch (error) {
      return undefined;
    }
  }
   
  async channels(input) {
    try {
  if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      
  const guild = await this.client.guilds.fetch(guildId)
      const channels = await guild.channels.fetch();
      return channels;
    } catch (error) {
      return undefined;
    }
  }
  

  
async guild(input) {
    try {
      
   if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      
      const guild = await this.client.guilds.fetch(guildId);
      return guild;
    } catch (error) {
      return undefined;
    }
  }
async guilds(input) {
 try {
   if (input === undefined) {
      return undefined;
    }
      const guilds = await this.client.guilds.cache;
      return guilds;
    } catch (error) {
      return undefined;
    } 
}
  async emoji(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const emojiId = typeof input === 'object' && input !== null ? input.emojiId : input;
  if (typeof emojiId !== 'string') {
    return undefined;
  }
if(!emojiId) throw new Error("Please Provide emojiId")
      const emoji = await this.client.emojis.fetch(emojiId);
      return emoji;
    } catch (error) {
      return undefined;
    }
  }

  async emojis(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      const guild = await this.client.guilds.fetch(guildId)
      const emojis = await guild.emojis.fetch();
      return emojis;
    } catch (error) {
      return undefined;
    }
  }

  async invite(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const inviteCode = typeof input === 'object' && input !== null ? input.inviteCode : input;
  if (typeof inviteCode !== 'string') {
    return undefined;
  }
if(!inviteCode) throw new Error("Please Provide inviteCode")
      const invite = await this.client.invites.fetch(inviteCode);
      return invite;
    } catch (error) {
      return undefined;
    }
  }
 
 async invites(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
  const guild = await this.client.guilds.fetch(guildId)
  const invites = await guild.invites.fetch();
      return invites;
    } catch (error) {
      return undefined;
    }
  }
 // guildId, roleId
  async role(input , input2) {
    try {
      if (input === undefined && input2 === undefined) {
      return undefined;
    } 
// GUILD
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
// ROLE 
const roleId = typeof input2 === 'object' && input2 !== null ? input2.roleId : input2;
  if (typeof roleId !== 'string') {
    return undefined;
}
if(!roleId) throw new Error("Please Provide roleId")
      const guild = await this.client.guilds.fetch(guildId);
      const role = await guild.roles.fetch(roleId);
      return role;
    } catch (error) {
      return undefined;
    }
  }

async roles(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      const guild = await this.client.guilds.fetch(guildId);
      const role = await guild.roles.fetch();
      return role;
    } catch (error) {
      return undefined;
    }
  }

  async member(input, input2) {
    try {
      if (input === undefined && input2 === undefined) {
      return undefined;
    } 
// GUILD
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
// USER
const userId = typeof input2 === 'object' && input2 !== null ? input2.userId : input2;
  if (typeof userId !== 'string') {
    return undefined;
}
if(!userId) throw new Error("Please Provide userId")
      const guild = await this.client.guilds.fetch(guildId);
      const member = await guild.members.fetch(userId);
      return member;
    } catch (error) {
      return undefined;
    }
  }

  async members(input) {
    try {
    if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      const guild = await this.client.guilds.fetch(guildId);
      const members = await guild.members.fetch();
      return members;
    } catch (error) {
      return undefined;
    }
  }

async message(input, input2) {
    try {
      if (input === undefined && input2 === undefined) {
      return undefined;
    } 
// CHANNEL
  const channelId = typeof input === 'object' && input !== null ? input.channelId : input;
  if (typeof channelId !== 'string') {
    return undefined;
  }
if(!channelId) throw new Error("Please Provide channelId")
// MESSAGE 
const messageId = typeof input2 === 'object' && input2 !== null ? input2.messageId : input2;
  if (typeof messageId !== 'string') {
    return undefined;
}
if(!messageId) throw new Error("Please Provide messageId")
      const channel = await this.client.channels.fetch(channelId);
      const message = await channel.messages.fetch(messageId);
      return message;
    } catch (error) {
      return undefined;
    }
  }
  
async messages(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const channelId = typeof input === 'object' && input !== null ? input.channelId : input;
  if (typeof channelId !== 'string') {
    return undefined;
  }
if(!channelId) throw new Error("Please Provide channelId")
      const channel = await this.client.channels.fetch(channelId);
      const messages = await channel.messages.fetch();
      return messages;
    } catch (error) {
      return undefined;
    }
  }


async voiceState(input, input2) {
    try {
      if (input === undefined && input2 === undefined) {
      return undefined;
    } 
// GUILD
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
// USER 
const userId = typeof input2 === 'object' && input2 !== null ? input2.userId : input2;
  if (typeof userId !== 'string') {
    return undefined;
}
if(!userId) throw new Error("Please Provide roleId")
      const guild = await this.client.guilds.fetch(guildId);
      const voiceState = guild.voiceStates.cache.get(userId) || await guild.voiceStates.fetch(userId);
      return voiceState;
    } catch (error) {
      return undefined;
    }
  }
  
async voiceStates(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      const guild = await this.client.guilds.fetch(guildId);
      const voiceStates = await guild.voiceStates.fetch();
      return voiceStates;
    } catch (error) {
      return undefined;
    }
  }

async ban(input, input2) {
    try {
      if (input === undefined && input2 === undefined) {
      return undefined;
    } 
// GUILD
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
// USER
const userId = typeof input2 === 'object' && input2 !== null ? input2.userId : input2;
  if (typeof userId !== 'string') {
    return undefined;
}
if(!userId) throw new Error("Please Provide userId")
      const guild = await this.client.guilds.fetch(guildId);
      const ban = await guild.bans.fetch(userId);
      return ban;
    } catch (error) {
      return undefined;
    }
  }
  
async bans(input) {
    try {
      if (input === undefined) {
      return undefined;
    }
  const guildId = typeof input === 'object' && input !== null ? input.guildId : input;
  if (typeof guildId !== 'string') {
    return undefined;
  }
if(!guildId) throw new Error("Please Provide guildId")
      const guild = await this.client.guilds.fetch(guildId);
      const bans = await guild.bans.fetch();
      return bans;
    } catch (error) {
      return undefined;
    }
  }
  
async thread(input, input2) {
try {
 if (input === undefined && input2 === undefined) {
      return undefined;
    } 
// CHANNEL
  const channelId = typeof input === 'object' && input !== null ? input.channelId : input;
  if (typeof channelId !== 'string') {
    return undefined;
  }
if(!channelId) throw new Error("Please Provide channelId")
// THREAD 
const threadId = typeof input2 === 'object' && input2 !== null ? input2.threadId : input2;
  if (typeof threadId !== 'string') {
    return undefined;
}
if(!threadId) throw new Error("Please Provide threadId") 
const channel = await this.client.channels.fetch(channelId)
const thread = await channel.threads.fetch(threadId)
return thread;
} catch (err) { 
  return undefined;
}

}
async threads(input) {
try { 
 
 if(input === undefined) {
   return undefined;
 }
  
const channelId = typeof input === 'object' && input !== null ? input.channelId : input;
  if (typeof channelId !== 'string') {
    return undefined;
  }
if(!channelId) throw new Error("Please Provide channeId")
const channel = await this.client.channels.fetch(channelId)
const threads = await channel.threads.fetch()
return threads;
} catch (err) { 
  return undefined;
}
}
  
async reaction(input, input2) {
  
if (input === undefined && input2 === undefined) {
      return undefined;
    } 
// CHANNEL
  const channelId = typeof input === 'object' && input !== null ? input.channelId : input;
  if (typeof channelId !== 'string') {
    return undefined;
  }
if(!channelId) throw new Error("Please Provide channelId")
// MESSAGE 
const messageId = typeof input2 === 'object' && input2 !== null ? input2.messageId : input2;
  if (typeof messageId !== 'string') {
    return undefined;
}
if(!messageId) throw new Error("Please Provide messageId")
  const channel = await this.client.channels.fetch(channelId)
  const message = await channel.messages.fetch(messageId)
return {
    async user(input) {
      try {
      if (input === undefined) {
        return undefined;
      }
   const userId = typeof input2 === 'object' && input2 !== null ? input2.userId : input2;
  if (typeof userId !== 'string') {
    return undefined;
}
if(!userId) throw new Error("Please Provide userId")
      const reactions = message.reactions.cache;
      if(!reactions) return undefined;
      const user = await Promise.all(
            reactions.map(async (reaction) => await reaction.users.fetch(userId))
          );
      return user;
      } catch (err) {
        return undefined;
      }
    },
  async users() {
      try {
       if (input === undefined) {
        return undefined;
      }
      const reactions = message.reactions.cache;
      if (!reactions || reactions.size === 0) return undefined;
      const users = await Promise.all(
            reactions.map(async (reaction) => await reaction.users.fetch())
          );
          return users;
      } catch (err) {
        return undefined;
      }
     }
    }
   }
  
}
module.exports = Fetch;