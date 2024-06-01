import { db } from "@/app/db/db";
import { messages } from "@/app/db/schema";

export async function getMessageFromDatabase() {
    
    try {
        const response = await db.select().from(messages)
        return response
    } catch (error) {
        console.log(error)
    }
}