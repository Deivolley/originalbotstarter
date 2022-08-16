    const {
    MessageEmbed
} = require('discord.js');

module.exports = {
	name: "dm",
    aliases: [ "dm" ],
    description: "dm",
		run: async (client, message, args) => {
        
        if(!message.member.permissions.has("MANAGE_MESSAGES")){
            return;
        }
        
        let user;
        
        let content = args.slice(1).join(" ");
        
        if(message.mentions.users.first()){
            user = message.mentions.users.first();
        }
        
        if(!user){
            return message.channel.send("กรุณา `@` ผู้ใช้ด้วยค่ะ!");
        }
        
        if(user.id == message.author.id) {
            return message.reply(`คุณแท็กตัวเอง`);
        }
        
        if(user.id === client.user.id) {
            return message.channel.send(
            new MessageEmbed()
            .setDescription('ไม่สามารถส่งข้อความหา '+client.user.username+'  ได้ค่ะ')
            .setColor("RANDOM")
                );
        }
        
        
        
        user.send(`${content} BY`).then((mem) => {
            message.channel.send(`ข้อความถูกส่งไปถึง : ${user.tag} เรียบร้อยแล้ว!`);
            
        })
        .catch((err) => {
            message.channel.send(`ส่งข้อความไม่สำเร็จ เกิดข้อผิดพลาด : ${err}`);
        });
        
            
        
        
        
    }
};