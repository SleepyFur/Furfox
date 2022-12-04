const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('testembed')
    .setDescription('Returns an embed'),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
    .setTitle(`This Is A Test Embed!`)
    .setDescription(`and this is a test description!`)
    .setColor(0x18e1ee)
    .setImage(client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp(Date.now())
    .setAuthor({
        url: `https://asrielhome.co.uk/`,
        iconURL: client.user.displayAvatarURL(),
        name: client.user.tag
    })
    .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: "Developed by Asriel#0666"
    })
    .setURL(`https://asrielhome.co.uk/`)
    .addFields([
        {
            name: `Field 1`,
            value: `Field Value 1`,
            inline: true
        },
        {
            name: `Field 2`,
            value: `Field Value 2`,
            inline: true
        }
    ]);

    await interaction.reply({
        embeds: [embed]
    });
  },
};
