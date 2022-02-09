import { enviroment } from "../enviroment";

process.env.NTBA_FIX_319 = enviroment.env;

const TelegramBot = require('node-telegram-bot-api');


const Baobab = new TelegramBot(enviroment.token, { polling: true });

console.log("Bot iniciado");

Baobab.on('message',function(msg){
    console.log("Chat:" + msg.chat.id);
    console.log("Usuario: " + msg.from.username);
    console.log("Texto: " + msg.text.toString());
    console.log(Date());

    Baobab.sendMessage(msg.chat.id, "Hola " + msg.from.username + "!\n"
    + "Aun no estoy listo en esta nueva versión!\n"
    + "Hay que esperar un poco más!" )
})