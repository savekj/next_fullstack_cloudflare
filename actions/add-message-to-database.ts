'use server'

import { db } from "@/app/db/db"
import { messages } from "@/app/db/schema"
import { revalidatePath } from "next/cache"

export async function addMessageToDatabase(input: string) {
    console.log(input, ' this is pass from input in server component')

    try {
        // const response = await db.insert(messages).values({ message: input })
        await db.insert(messages).values({ message: input })
        revalidatePath('/')

        // if (response) {
        //     return { ok: true }
        // }
    } catch (error) {
        console.log(error)
        return { ok: false }
    }


    return { ok: true }
} 