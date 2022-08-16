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
    name: "md",
    aliases: [ "md" ],
    description: "rule Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<:Contact:902548250899382313> **รับทำดิสคอร์ด** ')
		.setColor('E4FF00')
		.setDescription('```- ทำได้ทุกรูปแบบและทุกแนว \n- ทำแบบยืนยันตัวตนได้ทุกรูปแบบ \n- บอทเช็คสถานะคนใน server \n- รับทำบอทยินดีต้อนรับ,ลาก่อนได้ \n- บอทระบบเช็คคำเชิญ \n- กดอิโมจิรับยศหรือพิมพ์คำสั่งรับยศ \n- บอทเลเวลตั้งให้ได้ยศที่ตั้งไว้ได้ \n- ระบบบอทคาสิโนครบชุด\n- บอทลบลิ้งคำเชิญและลิ้งอื่นๆที่ไม่ต้องการ \n- ระบบกดเข้าห้องแล้วสร้างห้อง \n- รับก็อปเซิฟเวอร์ความเหมือน 90% \n- ดึง emoji ต่างๆเข้า server ให้ \n- ระบบรักษาความปลอดภัย \n- logการกระทำต่างๆ \n- ทางร้านเซ็ทบอทได้เกือบทุกตัวคะ```')
		.addFields(
		{name: '**เฉพาะบอท**', value: 'ราคาสามารถติดต่อได้ที่ <#902543094023602246>',  inline: true},
		{name: '**ทั้งดิส**', value: ' ราคาอยู่ที่ 30 - 200 คะ ',  inline: true},
        )
        .setImage('https://cdn.discordapp.com/attachments/902190654858338315/903619831868297226/Discord-profile-banner-animated-gif.png')
        .setFooter('FairyShop');
message.channel.send( { embeds: [ Nitro ] });
    }
}