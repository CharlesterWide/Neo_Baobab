import { commandList } from "../Constants/commands";

export class Message {
    chatId: string;
    date: string = Date();
    firstName: string = "";
    hasDocument: boolean = false;
    hasPhoto: boolean = false;
    hasSticker: boolean = false;
    isBot: boolean = false;
    language: string = "es";
    lastName: string = "";
    text: string = "";
    timestamp: number = Date.parse(Date());
    userId: string;
    username: string = "";

    constructor(msg: any) {
        this.chatId = msg.chat.id;
        this.date = msg.date != undefined ? new Date(msg.date * 1000).toDateString() : Date();
        this.firstName = msg.from.first_name || "";
        this.hasDocument = msg.document != undefined;
        this.hasPhoto = msg.photo != undefined;
        this.hasSticker = msg.sticker != undefined;
        this.isBot = msg.from.is_bot || false;
        this.language = msg.from.language_code || "es";
        this.lastName = msg.from.last_name || "";
        this.text = msg.text || "";
        this.timestamp = msg.date || Date.parse(Date());
        this.userId = msg.from.id;
        this.username = msg.from.username || "";
    }

    get isCommand(): boolean {
        return commandList.includes(this.text);
    }
}