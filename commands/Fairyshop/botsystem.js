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
    name: "bs",
    aliases: [ "bs" ],
    description: "Youtube Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<:Contact:902548250899382313> **Bot System <:718181573744394310:903636677459836968> **')
		.setColor('FF0000')
		.setDescription('\n**รับเปิดคำสั่งบอท/ฝากบอท** \n ฝากเปิดบอทอยู่ที่ 150 บาท \n ฝากเปิดคำสั่งอยู่ที่ 50')
		.addFields(
		{ name: 'บอทรูปแบบที่ 1', value: '```- คำสั่ง Base V13 \n - Slashcommand  \n - คำสั่ง gacha ขอซื้อ สล้อตได้ 60 1 สล็อค / 200 ไฟล์คำสั่ง \n - marry/divorce 300 \n - checkin 200 \n - gang 500 \n เหมารวม 1,000 บาท ```', inline: true },
		{ name: 'บอทรูปแบบที่ 2', value: '```- Base V13 \n - Slashcommand\n - บอทเพลงแบบ hydra \n ราคา 850```', inline: true },
		{ name: 'บอทรูปแบบที่ 3', value: '```- Base V13 \n - ระบบ Invite แบบ Invite Tracker / 700 ```', inline: true },
		{ name: 'บอทรูปแบบที่ 4', value: '```- Base V13 \n - ระบบ Welcome  ยกไฟล์ / 600 ```', inline: true },
		{ name: 'บอทรูปแบบที่ 5', value: '```- Base V13 \n - ระบบ ticket แบบ Button / 600 ```', inline: true },
	)
        .setImage('https://cdn.discordapp.com/attachments/903633383404482621/903636224894439444/eJwVyksOwiAQANC7sJfp8Ke7Lt15A0MoUpJWGmZcGe-ubl_eW7zGLmaxMZ80A6yNch-rJO4j1SJr73Uv6Wwkcz8gMae8HeXJBOjC5NEap42dokUX_4SotI8GVfBaYYDldr3n3y_jomRtD_H5ArCeI9g.zGz1JSL-9DXgpkX_SkmMDM8NWGg.gif')
        .setFooter('');
message.channel.send({ embeds: [ Nitro ] });
    }
}