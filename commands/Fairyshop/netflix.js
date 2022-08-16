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
    name: "netflix",
    aliases: [ "netflix" ],
    description: "topup Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<:Contact:902548250899382313> **Netflix 4K** <:Netflix:902547707699286087>  ')
		.setColor('FF0000')
		.setDescription('**กฏ** \n```\n- ห้ามเปลี่ยน 𝗘𝗺𝗮𝗶𝗹 / 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱 เด็ดขาด! \n- ห้ามลูกค้าเผยแพร่รหัสต่อให้คนอื่น \n- 1 จอ : 1 คน ล็อคอินได้หลายเครื่องแต่ดูได้ " ทีละเครื่องน้า "\n เมื่อเข้าจอแล้ว "เปลี่ยนชื่อ+โปรไฟล์" แคปหลังเปลี่ยนชื่อจอส่งหลักฐานยืนยันมาด้วยนะคะ ไม่มีหลักฐานไม่รับเคลมทุกกรณี! \n - ห้ามเข้าจอลูกค้าท่านอื่น เข้าได้เฉพาะจอตัวเองเท่านั้นน้า \n - หากทำผิดกฎยกเลิกการใช้งานทุกกรณีและไม่คืนเงินนะคะ❕ \n - ต่อเมลแจ้งก่อนหมด 2-3 วัน หลังจากนั้นต่อไม่ทันน้า``` \n **ราคา** ```\n1 วัน ราคา 12 บาท \n2 วัน ราคา 17 บาท \n3 วัน ราคา 23 บาท \n7 วัน ราคา 40 บาท \n30 วัน ราคา 105 บาท \n37 วัน ราคา 125 บาท```')
        .setImage('https://cdn.discordapp.com/attachments/901825131909902336/901884830269177856/netflix-netflix-startup.gif')
        .setFooter('FairyShop');
message.channel.send( { embeds: [ Nitro ] });
    }
}