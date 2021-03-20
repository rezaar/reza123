const config = require(`./config.json`);
const discord = require('discord.js')
const prefix = config.prefix
const client = new discord.Client();

client.on("ready", () => {
    console.log(`${client.user.tag} is ready`);
    function YousamPower() {
        let targetguild0 = client.guilds.cache.get("Server-ID") //***por kon
        let status = [`${targetguild0.memberCount} Members`] //***por kon status haro
        let Power = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[Power], { type: "WATCHING" });
    }; setInterval(YousamPower, 2000)
    
        function chNickname() {
        const targetguild = client.guilds.cache.get("SERVER-ID") //***por kon
        const me = targetguild.members.cache.get(client.user.id)
        let name = [] //***por kon nikename
        for(let i = 0; i < name.length; i++ )
        me.setNickname(name[i])
    }; setInterval(chNickname, 10000)

    const channel = client.channels.cache.get("Voice-Channel-ID"); //***por kon
    if (!channel) return console.error("Channel Vojod Nadarad");
    channel.join().then(connection => {
        console.log("ba Movafaghiat Connect shod.");
    }).catch(e => {
        console.error(e);
    });
    function connectVoice() {
        const channel = client.channels.cache.get("Voice-Channel-ID"); //***por kon
        if (!channel) return console.error("Channel Vojod Nadarad");
        if (!client.voice.connections.get("Server-ID")) { //***por kon
            const channel = client.channels.cache.get("Voice-Channel-ID"); //***por kon
            if (!channel) return console.error("Channel Vojod Nadarad");
            channel.join().then(connection => {
                console.log("ba Movafaghiat Connect shod.");
            }).catch(e => {
                console.error(e);
            });
        }
    }; setInterval(connectVoice, 120000)
});

client.on('message', async message => {
    let messageArry = message.content.split(" ")
    let cmd = messageArry[0]
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type == "dm") return


    if (command == 'kick') {
        let cmd = messageArry[0]
        let status = messageArry[1]
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Shoma permission estefade az in command ro nadarid")
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("bot permission nadarad")
        let tokick = message.mentions.members.first()
        const reason = message.content.replace(`${cmd} ${status}`, '') || "dalili sabt nashode ast";
        if (tokick) {
            tokick.kick({
                reason: reason
            })
            console.log("Kicked")
            message.channel.send(`${tokick} Successfully Kicked by: <@${message.author.id}> Reason : **${reason}**`)
        } else {
            message.reply("Lotfan yek nafar ro mention konid")
        }
    }
    if (command == 'ban') {
        let cmd = messageArry[0]
        let status = messageArry[1]
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Shoma permission estefade az in command ro nadarid")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("bot permission nadarad")
        let toban = message.mentions.members.first()
        const reason = message.content.replace(`${cmd} ${status}`, '') || "dalili sabt nashode ast";
        if (toban) {
            toban.ban({
                reason: reason
            })
            console.log("banned")
            message.channel.send(`${toban} Successfully Baned by: <@${message.author.id}> Reason : **${reason}**`)
        } else {
            message.reply("Lotfan yek nafar ro mention konid")
        }
    }

    if (command == 'unban') {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Shoma permission estefade az in command ro nadarid")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("bot permission nadarad")
        let tounban = messageArry[1]
        if (tounban) {
            message.guild.members.unban(tounban)
            console.log("unbanned")
            message.channel.send(`<@${tounban}> Successfully UNBaned by: <@${message.author.id}>`)
        } else {
            message.reply("Lotfan yek id vared konid")
        }
    }
     if(command == `ping`){
  message.channel.send(`✅ - Ping : **${client.ws.ping}ms** !\n✅ - Pong **(${Date.now() - message.createdTimestamp}ms)**`)
}
             if (command === "say") {
    const text = args.join(" ")
    if(!text) return message.channel.send("You have not specified something to say").then(msg => {
        msg.delete({ timeout: 30000 })
    })
    message.channel.send(text)
    
    }
        if (command === "rps") {
        const options = [
            "rock :shell: ",
            "paper :newspaper2:",
            "scissors :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`You got ${option}`)
    } 
   
      else if (command === "avatar") {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
	}

	const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
	});

	// send the entire array of strings as a message
	// by default, discord.js will `.join()` the array with `\n`
	message.channel.send(avatarList);
}
  
    else if (command === "server") {
      message.channel.send(`Server name: ${message.guild.name}\nServer owner: ${message.guild.owner}\nMember Count: ${message.guild.memberCount}\nId Server: ${message.guild.id}`);
}
  
  
  else if (command === "user") {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
    
});
client.login(config.token);
