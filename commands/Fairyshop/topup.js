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
    name: "topup",
    aliases: [ "topup" ],
    description: "topup Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<:Wallet:902547684781592616> **ชำระเงิน** ')
		.setColor('FFFFFF')
		.setDescription('')
		.addFields(
		{ name: '**Wallet**', value: 'Wallet : 0948811133\nName : อัศราวุธ กะจะนอก \n หากหาด้วยเบอร์ไม่เจอ สามารถกด \n ลิ้งค์ : https://tmn.app.link/gSc80kyxKkb \n หรือสแกนโค้ดด้านล่างได้เลยครับ', inline: true },
		{ name: '**พร้อมเพลย์**', value: 'หากไม่สามารถชำระด้วยวอเลทได้ สามารถชำระด้วยพร้อมเพลย์ นะครับ เบอร์เดียวกัน', inline: true },
	)
        .setImage('https://cdn.discordapp.com/attachments/902190654858338315/903625077994692648/MyQR_2021-10-29_19.43.11.jpg')
        .setFooter('FairyShop');
message.channel.send( { embeds: [ Nitro ] });
    }
}