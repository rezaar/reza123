const config = require(`./config.json`);
const discord = require('discord.js')
const prefix = config.prefix
const client = new discord.Client();

client.on("ready", () => {
    console.log(`${client.user.tag} is ready`);
    function YousamPower() {
        let targetguild0 = client.guilds.cache.get("812768125551640616") //***por kon
        let status = [`${targetguild0.memberCount} Members`] //***por kon status haro
        let Power = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[Power], { type: "WATCHING" });
    }; setInterval(YousamPower, 2000)

    const channel = client.channels.cache.get("814175233485438986"); //***por kon
    if (!channel) return console.error("Channel Vojod Nadarad");
    channel.join().then(connection => {
        console.log("ba Movafaghiat Connect shod.");
    }).catch(e => {
        console.error(e);
    });
    function connectVoice() {
        const channel = client.channels.cache.get("814175233485438986"); //***por kon
        if (!channel) return console.error("Channel Vojod Nadarad");
        if (!client.voice.connections.get("812768125551640616")) { //***por kon
            const channel = client.channels.cache.get("814175233485438986"); //***por kon
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
});
client.login(config.token);