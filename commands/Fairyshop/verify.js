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
    name: "vr",
    aliases: [ "vr" ],
    description: "verify Shop",
    run: async (client, message, args) => {
// inside a command, event listener, etc.
const Nitro = new Discord.MessageEmbed()
		.setTitle(' **ยืนยันตัวตน** ')
		.setColor('E4FF00')
		.setDescription('สามารถยืนยันตัวตนได้โดยการพิมพ์ **__Fairyshop__** ค่ะ')
		.addFields(
		{name: '**หากยืนยันไม่ติด**', value: '```สามารถติดต่อแอดมินหรือหัวดิสในด้านขวาได้เลยค่ะ```',  inline: true},
		{name: '**หากมีข้อสงสัยตรงไหน**', value: '```สามารถทักมาถามส่วนตัวได้เลยค่ะ``` ',  inline: true},
        )
        .setImage('https://cdn.discordapp.com/attachments/902190654858338315/903487917236817980/standard_1.gif')
        .setFooter('FairyShop');
message.channel.send( { embeds: [ Nitro ] });
    }
}