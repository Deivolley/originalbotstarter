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
    name: "room",
    aliases: [ "room" ],
    description: "room Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle(' **ระบบจัดการห้องด้วยอีโม**')
		.setColor('FF0000')
		.setDescription('<:LTlock:903836927202046002> :** ไม่ให้สมาชิกท่านอื่นสามารถเข้ามาพูดคุยในช่องเสียงของคุณ** \n\n <:unlock:903836903802040360> : **ให้สมาชิกท่านอื่นสามารถเข้ามาพูดคุยในช่องเสียงของคุณ** \n\n <:eyeslashed:903836897309249546> : **ปิดไม่ให้สมาชิกท่านอื่นมองเห็นช่องเสียงของคุณ** \n\n <:eye:903836890556428298> : **เปิดให้สมาชิกท่านอื่นมองเห็นช่องเสียงของคุณ** \n\n <:plus:903836911418880050> : **เพิ่มจำนวนสมาชิกสูงสุดในช่องเสียง** \n\n <:minus:903836919434182688> : **ลดจำนวนสมาชิกสูงสุดในช่องเสียง**')
        .setImage('https://cdn.discordapp.com/attachments/902190654858338315/903837622424707092/sony-announces-astro-bot-rescue-mission-for-psvr-510206_expanded.png')
        .setFooter('');
message.channel.send({ embeds: [ Nitro ] });
    }
}