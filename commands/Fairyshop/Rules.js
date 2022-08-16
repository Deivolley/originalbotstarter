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
    name: "rule",
    aliases: [ "rule" ],
    description: "rule Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle('<a:886892170068520970:903610361075347457>  **กฏของทางร้าน**  <a:886892205925605376:903610372014108672>')
		.setColor('black')
		.setDescription('```• ไม่มีการคืนยอดเงินที่ชำระมาแล้วนะครับ ยกเว้นมีการโอนยอดเงินเกินหรือระบบมีปัญหาเท่านั้นนะครับ \n\n • ไม่สามารถถอนหรือยกเลิก Order ที่สั่งไว้ได้นะครับ ยกเว้นเจ้าของร้านจะเป็นคนบอกเอง \n\n • กรุณาโอนเงินก่อนนะครับแล้วรอสักประมาณ 2-3 นาทีแล้วเราจะส่ง Link Nitro ให้ค่ะ \n\n •  ไม่อนุญาตให้แชร์ลิ้งค์ดิสคอร์ดอื่นๆ ภายในดิสนี้ \n\n •  รับทำ Discord ท่านจะต้องโอนเงินครบ 100% หรือ 50% ก่อนถึงเราจะเริ่มงานนะคะ \n\n •  โปรดอ่านกฏของทางร้านเราก่อนสั่งสินค้านะคะ \n\n •  เมื่อสั่งซื้อสินค้ากับทางร้านแล้วอย่าลืมให้เครดิตและรีวิวให้กับทางร้านด้วยค่ะ```')
		.addFields(
		{name: '**บทลงโทษ**', value: ' • Mute : การทำผิดครั้งที่ 2 หลังจากมีการเตือน\n • Ban  : กระทำผิดซ้ำ แบน 7วัน หรือ ถาวร',  inline: true},
		{name: '**หากสงสัย**', value: ' สามารถถามแอดมินทุกท่านในช่อง <#902197353648365598> ได้เลยค่ะ',  inline: true},
        )
        .setImage('https://cdn.discordapp.com/attachments/902190654858338315/903610232054374440/anime-rules.gif')
        .setFooter('FairyShop');
message.channel.send( { embeds: [ Nitro ] });
    }
}