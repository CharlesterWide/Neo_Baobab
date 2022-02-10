import { enviroment } from "../enviroment";

process.env.NTBA_FIX_319 = enviroment.env;

const TelegramBot = require('node-telegram-bot-api');

import { Baobab } from "./Functions/MainBot";


const Bot = new TelegramBot(enviroment.token, { polling: true });
const ProfesorBaobab = new Baobab();

console.log("Bot iniciado");

Bot.on('message',function(msg){
    ProfesorBaobab.readMessage(msg).then(function(resolve){
        Bot.sendMessage(msg.chat.id ,resolve);
    })
})