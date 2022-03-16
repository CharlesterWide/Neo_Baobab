import { Message } from "../DataStructures/message";

export class Baobab {

    constructor() { }

    readMessage(msg: any) {
        var promise = new Promise(function (resolve, reject) {
            var MSG = new Message(msg);
            console.log(`Username      :   ${MSG.username}`);
            console.log(`Time          :   ${MSG.date}`);
            console.log(`Has files     :   ${(MSG.hasDocument || MSG.hasPhoto || MSG.hasSticker)}`);
            console.log(`Message       :   ${MSG.text}`);
            console.log(`Is command    :   ${MSG.isCommand}`)

            resolve("Hola " + msg.from.username + "!\n"
                + "Aun no estoy listo en esta nueva versión!\n"
                + "Hay que esperar un poco más!")
        })
        return promise;
    }

}