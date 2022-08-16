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
    name: "yt",
    aliases: [ "yt" ],
    description: "Youtube Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<:Contact:902548250899382313> **Youtube Premium <:Youtube:902547698778013717>**')
		.setColor('FF0000')
		.setDescription('\n**๑˚₊☘︰รายละเอียดโปรดอ่าน !**')
		.addFields( 
		{name: '**𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (ไม่ต่อเมล)**', value: '```เเบบไม่ต่อเมลสามารถใช้ได้เเค่ 2 ครั่งเนื่องจากต้องย้ายเขากลุ่มครอบครัวตลอดเเละขอกำหนดของทาง YouTube ให้ 1 ปี สามารถย้ายกลุ่มครอบครัวเเค่ 2 ครั่งต่อ 1 ปี เลยไม่สามารถเข้ากลุ่มอื่นได้ถ้าเข้าร่วมครบเเล้ว```', inline: true },
		{name: '**𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 (ต่อเมล)**', value: '```เเบบต่อเมลสามารถใช่ได้ตลอดเนื่องจากต่อบ้านเดิมไปเรื่อยๆยาวๆเเละไม่ต้องย้ายกลุ่มเหมือน หากต้องการไม่ต่อเมลเเค่มาเเจ้งต่อเมลของเเต่ละเดือนเท่านั้น```',  inline: true},
        )
		.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'ราคาเมลธรรมดา <:Youtube:902547698778013717>', value: '```30 วัน ราคา 10 บาท (ไม่ต่อเมล) \n30 วัน ราคา 45 บาท (ต่อเมล)\n90 วัน ราคา 135 บาท (ต่อเมล)\n180 วัน ราคา 270 บาท (ต่อเมล)\n365 วัน ราคา 540 บาท (ต่อเมล)```', inline: true },
		{ name: 'ราคาเมลร้าน <:Youtube:902547698778013717>', value: '```30 วัน ราคา 15 บาท (ไม่ต่อเมล) \n30 วัน ราคา 50 บาท (ต่อเมล) \n90 วัน ราคา 140 บาท (ต่อเมล) \n180 วัน ราคา 275 บาท (ต่อเมล) \n365 วัน ราคา 545 บาท (ต่อเมล)```', inline: true },
	)
        .setImage('https://cdn.discordapp.com/attachments/902190654858338315/903603598842273792/youtube-premium.gif')
        .setFooter('');
message.channel.send({ embeds: [ Nitro ] });
    }
}