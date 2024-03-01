const express = require('express');
 app = express();

const keepAlive = require('./server.js');

 app.listen(() => console.log('done !'));

 app.use('/ping', (req, res) => {
     res.send(new Date());
 }); 

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);

const Discord = require('discord.js');
const { Client, MessageActionRow, MessageButton, Modal, MessageButtonStyle, TextInputComponent, TextInputStyle, Permissions } = require('discord.js');
const client = new Discord.Client({ intents: [new Discord.Intents(32767)] });
const { Intensts, MessageEmbed, Collection, Collector, Formatters, MessageSelectMenu, Intents, MessageAttachment } = require('discord.js');
var cooldown = new Set()
const { ButtonBuilder, ButtonStyle, Events, ActionRowBuilder } = require('discord.js');
const mongoose = require("mongoose");
const nodeevent = require('node:events');
const ms = require("ms")
const moment = require("moment")
const guild = require('guild');
const request = require('request');
const prefix = "!"  
const wait = require('node:timers/promises').setTimeout;

const line = "https://media.discordapp.net/attachments/1191679203830157393/1191682838232313967/350kb.gif"; // رابط خطك

//
client.on(`ready`, () => {
 console.log(`${client.user.tag} Ready!`)
 client.user.setStatus(`online`)
 client.user.setActivity(`SERVER Ball`) 
});

client.login(process.env.token)

client.on("messageCreate", async interaction => {
if (interaction.content.startsWith(prefix + 'info')){

  let embed = new Discord.MessageEmbed() 
      .setTitle("** 🏀・SERVER Ball 🏀 - - - - - - - - - - - -  INFO EMBED **")
      .setColor("#f38200")
    .setThumbnail(``)
    	.setAuthor(`-----------------------------------------------------------------------------`)    
   .setDescription(`**- - The available information includes 1 Discord Rules, 1 Server Rules, 4 Methods information available
\n- - This is a server that respects the rules of Discord and is not a hacking server. We give methods and all of this is for the purpose of learning.**`)
    .setFooter(`-------------------------------------------------------------------------------------------`)
  
const menu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
           
         .setCustomId('menu_guide') 
         .setPlaceholder('SHOOSE INFORMATION')

         .addOptions([
                      
                        {
             label: 'DISCORD RULES ',
                              description: 'FOR DISCORD RULES',
             emoji: `<:bballadmin:1191697909348044880>`,
             value: 'First_Law',
                        },
                        {              
                      
             label: 'SERVER RULES',
                              description: 'FOR SERVER RULER',
             emoji: `<:bballowner:1191697984707108936>`,
             value: 'Second_Law',
                        },      

           
             {              
                      
             label: 'HOW USE/BEY TOOLS',
                              description: 'FOR SHOP TOOLS',
             emoji: `<:bballadmin:1191697909348044880>`,
             value: 'Seventh_Law',
                        },   
           
                    ]),
        );
    interaction.channel.send({
      embeds: [embed], components: [menu]}).then(m => {
      interaction.delete()
      })
  
}
}) 

client.on("interactionCreate", async interaction => {
    if (!interaction.isSelectMenu()) return;

  let embed1 = new Discord.MessageEmbed() 
      .setTitle("**- - - - - - - - - - - - - - - - DISCORD RULES - - - - - - - - - - - - - - - - **")
      .setColor("#f38200") 
    .setThumbnail("https://cdn.discordapp.com/attachments/1124063112555929740/1125240518029352990/Picsart_23-06-24_23-46-55-416.png")
    	.setAuthor("")     
     .setDescription("** ----------------------------------------------------------------------------- \n- - Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated. \n- -  No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members. \n- -  No age-restricted or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content. \n- -  If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space! \n ----------------------------------------------------------------------------- **") 

let embed2 = new Discord.MessageEmbed() 
  .setTitle("**- - - - - - - - - - - - - - - - SERVER RULES - - - - - - - - - - - - - - - - **")
      .setColor("#f38200") 
    .setThumbnail("https://cdn.discordapp.com/attachments/1124063112555929740/1125240518029352990/Picsart_23-06-24_23-46-55-416.png")
    	.setAuthor("")       
   .setDescription("** ----------------------------------------------------------------------------- \n- - We do not interfere in any process in which our tools are used \n- - Use smart tools or I will fire you \n- - Respect the command of the server and the original winr is @10_bot \n- - Any spam using tools will result in you being expelled \n ----------------------------------------------------------------------------- **") 
    let embed7 = new Discord.MessageEmbed() 
      .setTitle("**- - - - - - - - - - - - - - - - TOOLS INFO - - - - - - - - - - - - - - - - **")
      .setColor("#f38200") 
    .setThumbnail("https://cdn.discordapp.com/attachments/1124063112555929740/1125240518029352990/Picsart_23-06-24_23-46-55-416.png")
    	.setAuthor("")  
       .setDescription("** ----------------------------------------------------------------------------- \n- - To purchase any instrument, use the ``` !Stock ``` command to purchase. We accept ProRobot currency only \n- - For Free tools go to this room <#1191678316629995620> \n- - For Suuport tools and other DM <@1191713007579967508> \n ----------------------------------------------------------------------------- **") 
if (interaction.customId === "menu_guide"){
  
    if (interaction.values[0] === 'First_Law'){
 interaction.reply({contnet:`For While.`, embeds: [embed1], ephemeral:true})
} 
  
if (interaction.values[0] === 'Second_Law'){
 interaction.reply({contnet:`For While.`, embeds: [embed2], ephemeral:true})
}
  

if (interaction.values[0] === 'Seventh_Law'){
 interaction.reply({contnet:`For While.`, embeds: [embed7], ephemeral:true})
}
  
   } 
});
