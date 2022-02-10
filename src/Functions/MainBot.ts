export class Baobab {

    constructor() { }

    readMessage(msg: any) {
        var promise = new Promise(function (resolve, reject) {
            var chatId = msg.chat.id;
            console.log("Chat:" + msg.chat.id);
            console.log("Usuario: " + msg.from.username);
            console.log("Texto: " + msg.text.toString());
            console.log(Date());

            resolve("Hola " + msg.from.username + "!\n"
            + "Aun no estoy listo en esta nueva versión!\n"
            + "Hay que esperar un poco más!" )
        })
        return promise;
    }

}