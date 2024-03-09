require ('dotenv').config();
const {Client, IntentsBitField} = require ('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready',(c) => {
    console.log(`${c.user.username} (${c.user.id}) is currently running.`)
    const channelId = '1215617693978198027'; 
    const channel = client.channels.cache.get(channelId);
    channel.send('Bot is running.');
})


client.login(process.env.TOKEN);