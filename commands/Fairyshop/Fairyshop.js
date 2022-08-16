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
    name: "fs",
    aliases: [ "fs" ],
    description: "Fairyshop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle(' **Fairyshop** ร้านเปิดใหม่')
		.setColor('black')
		.setDescription('```╭・꒰🛒꒱︰ขาย Nitro Discord YouTube,Netflix \n┃・꒰🏘꒱︰รับทำเซิร์ฟเวอร์ Discord ทุกแนว \n┃・꒰🏘꒱︰ตกแต่ง Discord ก็รับนะ \n┃・꒰🤖꒱︰รับเซ็ทบอทหรือเพิ่มบอททุกระบบ \n┃・꒰🛡꒱︰ระบบรักษาความปลอดภัย \n┃・꒰🛡꒱︰ระบบกันป้องการยิง Dis แบบ 90% \n╰・꒰🤖꒱︰ทางเรามีระบบบอทขายด้วยน้าาา \n``` \n[ Link : http://discord.io/Fairyshop ]')
        .setImage('https://cdn.discordapp.com/attachments/902190654858338315/903876399176233030/standard_3.gif')
        .setFooter('FairyShop');
message.channel.send( { embeds: [ Nitro ] });
    }
}