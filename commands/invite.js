const { MessageEmbed } = require('discord.js');

module.exports = {
    description: "It is used to invite the bot to your discord server.",
    name: 'invite',
    options: [],

    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setTitle(client.user.username)
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("It's time to listen to music on your discord server with a completely free and advanced interface. Music bot Astra that supports playing music on many platforms that will make your server feel special")
        .addField("Invite Bot", `**[Add Me](https://discord.gg/sKsxD8zQEe) | [Vote](https://discord.gg/sKsxD8zQEe) | [Support](https://discord.gg/sKsxD8zQEe)**` ,true)
        .setTimestamp()
        .setFooter({ text: 'Music Bot - by Umut Bayraktar ❤️', iconURL:interaction.user.displayAvatarURL({ dynamic: true }) })
        interaction.reply({ embeds: [embed] }).catch(e => { })
    },
};
