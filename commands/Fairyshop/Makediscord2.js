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
    name: "md2",
    aliases: [ "md2" ],
    description: "rule Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<a:886892170068520970:903610361075347457> **โปรโมชั่นพิเศษ__สุดคุ้ม__!!** <a:886892205925605376:903610372014108672>')
		.setColor('79FFFE')
		.setDescription('```- อันนี้คือดิสที่ทำไว้แล้วนะคะ สามารถบอกเปลี่ยนอะไรได้เลยคะถ้าไม่ถูกใจมีแบบ (เรียบง่าย,อักษรพิเศษ,ตกแต่ง)```')
		.addFields(
		{name: '**<a:Gacolor:904467114553913424> ราคา 40.- บาท**', value: '```- ระบบยืนยันตัวตน\n- กดอิโมจิเพื่อรับยศ\n- ยินดีต้อนรับ,ออกดิส\n- ห้องพร้อม,บทบาทพร้อม\n- ทำเป็นโซนให้พร้อม\n- บอทเช็คสถานะสมาชิก\n- อิโมจิ Discord เพิ่ม\n- บอทเพลง 8 ตัว```',  inline: true},
		{name: '**<a:ffw48:904467469752754338> ราคา 150.- บาท**', value: '```- ระบบยืนยันตัว (ได้ทุกรูปแบบ)\n- กดอิโมจิเพื่อรับยศ (ตกแต่ง)\n- ยินดีต้อนรับ,ออกจากเซิร์ฟเวอร์\n- ระบบกดสร้างห้องให้ (5 โซน)\n- บอทเช็คลิ้งคำเชิญ\n- บอทเช็คสถานะสมาชิก\n- ช่วยคิดกฎระเบียบให้\n- ระบบคาสิโน (ระดับ 5)\n- ระบบบอทเลเวล (ให้ยศ)\n- บอทลบลิ้งค์คำเชิญและลิ้งอื่นๆ\n- ระบบรักษาความปลอดภัย\n- ป้องกันการยิงดิส (ปานกลาง)\n- เพิ่มอิโมจิในเซิร์ฟเวอร์ให้ (50 ตัว)\n- ห้องเยอะ,บทบาทพร้อม\n- บอทเพลง 20 ตัว\n- ต้องทักมาสอบถามได้นะคะ\n- สามารถปรับเปลี่ยนหรือเพิ่มได้ ```',  inline: true},
		{name: '**ถ้าสงสัยหรืออยากจะสั่งซื้อสอบถาม**', value: 'ติดต่อได้ที่ <#902543094023602246> เลยค่าาา' },
        )
        .setImage('https://media.discordapp.net/attachments/902190654858338315/904472432251904050/standard.gif')
        .setFooter('Fairy Shop');
message.channel.send( { embeds: [ Nitro ] });
    }
}