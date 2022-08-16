// at the top of your file
// at the top of your file
const Discord = require('discord.js');
const {
    MessageEmbed,
    MessageButton,
    MessageActionRow
} = require('discord.js');
const db = require('quick.db');
// Database Structure
// "user": {
//     "$uid": {
//         "friend": [
//             "$id",
//             "$id"
//         ]
//     }
// }

module.exports = {
    name: "send",
    aliases: [ "send" ],
    description: "send",
    run: async (client, message, args) => {
        
        let member = null;
        
        let contentchan = null;
        
        let contentdm = null;
        
        let contentcus = null;
        
        let author = null;
        
        let random = null;
        
        let red = null;
        
        member = message.mentions.users.first();
        
        contentchan = args.slice(1).join(" ");
        
        contentdm = args.slice(1).join(" ");
        
        contentcus = args.join(" ");
        
        author = message.author;
        
        random = "RANDOM";
        
        red = "RED";
        
        if (!message.member.permissions.has("MANAGE_MESSAGES")){
            return message.channel.send(
            new Discord.MessageEmbed()
            .setDescription(`คุณ ${author.tag} คุณจำเป็นต้องมีสิทธิ์ \`จัดการข้อความ\` ก่อนใช้คำสั่งด้วยค่ะ!`)
            .setColor(random)
            );
        }
        
        let chan = null;
        
        if (message.mentions.channels.first()){
            chan = message.mentions.channels.first();
            if (!args[1]){
                return message.channel.send('กรุณาระบุข้อความด้วยค่ะ');
            }
            
            client.channels.cache.get(chan.id).send(contentchan).then(() => {
                message.channel.send(
                new Discord.MessageEmbed()
                .setDescription(`ข้อความถูกส่งไปที่ห้อง <#${chan.id}> เรียบร้อยแล้ว`)
                .setColor(random)
                );
            })
            .catch((err) => {
                message.channel.send(
                new Discord.MessageEmbed()
                .setDescription(`ส่งข้อความไม่สำเร็จ เกิดข้อผิดพลาด : \`${err}`)
                .setColor(red)
                );
            })
        }
        
        
        
        if (message.mentions.users.first()){
            if (!args[0]){
                return message.channel.send('กรุณาระบุข้อความด้วยค่ะ');
            }
            if (member.id === message.author.id) {
                return message.channel.send('คุณแท็กตัวเอง')
            }
            
            member.send(contentdm).then(() => {
                message.channel.send(
                new Discord.MessageEmbed()
                .setDescription(`ข้อความถูกส่งไปหา : ${member.tag} เรียบร้อยแล้วค่ะ!`)
                .setColor(random)
                );
            })
            .catch((e) => {
                message.channel.send(
                new Discord.MessageEmbed()
                .setDescription(`ส่งข้อความไม่สำเร็จ เกิดข้อผิดพลาด : ${e}`)
                .setColor(red)
                );
            })
        }
        
        
        if (!args) {
            return message.channel.send('กรุณาระบุข้อความด้วยค่ะ');
        }
        
        if (message.mentions.channels.first()){
            return;
        }else if (message.mentions.users.first()){
            return;
        }
        
        message.channel.send(contentcus);
        
        message.delete();
        
    }
}
