const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')

client.on('ready', () => {
    console.log('Botumuz Hazır ve Online!')
})

client.login(config.token)