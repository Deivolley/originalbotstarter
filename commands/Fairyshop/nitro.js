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
    name: "nitro",
    aliases: [ "nitro" ],
    description: "Nitro shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<:Contact:902548250899382313> **Discord Nitro <a:NitroLogo:902547717153243168>**')
		.setColor('9EFCF3')
		.setDescription('\n**สิทธิพิเศษของ __Nitro Classic__** <a:Nitro:902547726590423092> \n\n```- เปลี่ยนเลขแท็กเป็น #9999 หรือ #0001 ได้ \n- ทำรูปโปรไฟล์เคลื่อนไหวได้ \n- สามารถใช้ Emoji จากเซิร์ฟเวอร์อื่น \n- สามารถใช้ Emoji เคลื่อนไหวได้ \n- ขนาดการส่งไฟล์สูงสุดที่ 100MB \n- รองรับการสตีมที่ 720p 60fps หรือ 1080p 30fps \n- ป้ายตราผู้สนับสนุนของ Discord ที่โปรไฟล์``` \n\n\n**สิทธิพิเศษของ __Nitro Boost__** <a:NitroBoost:902547736329601057> \n\n```- ได้รับสิทธิพิเศษของ Nitro Classic ทั้งหมด! \n- ได้รับเม็ด Boots Server2 เม็ด \n- เข้าร่วมเซิร์ฟเวอร์ได้มากขึ้นถึง 200 Server \n- ส่งข้อความที่ยาวถึง 4,000 ตัวอักษร \n- สามารถใช้สติ๊กเกอร์ได้ \n- รองรับการสตีมที่ 4k 60 fps \n- เปลี่ยนรูปแบนเนอร์ของตัวเองได้``` \n\n\nสนใจสามารถติดต่อได้ที่ <#902543094023602246> เลยค่ะ \n\n')
		.addFields(
		{ name: 'Nitro Classic <a:Nitro:902547726590423092>', value: '```- ระยะเวลา 1 เดือน ราคา 165. บาท \n- ระยะเวลา 1 ปี ราคา 1,650. บาท```', inline: true },
		{ name: 'Nitro Boost <a:NitroBoost:902547736329601057>', value: '```- ระยะเวลา 1 เดือน ราคา 330. บาท \n- ระยะเวลา 1 ปี ราคา 3,300. บาท```', inline: true },
	)
        .setImage('https://cdn.discordapp.com/attachments/890608234551988234/891529164014886912/giphyds.gif')
        .setFooter('');
message.channel.send({ embeds: [ Nitro ] });
    }
}