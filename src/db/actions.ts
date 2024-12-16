'use server'
import { type Message } from "./schema";
import { db } from "./db";
import { messagesTable } from "./schema";

export async function createMessage(message: Message) {
    console.log("attempting to create message: ", message);
    return db.insert(messagesTable).values(message);
}
