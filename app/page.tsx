import MessageForm from "@/components/message-form";
import { getMessageFromDatabase } from "@/actions/get-message-from-database";


export const runtime = 'edge'

export default async function Home() {

  const messages = await getMessageFromDatabase()

  return (
    <main className="mx-auto max-w-2xl p-10">
      <MessageForm />
      <div className="p-5">
        <ul>
          {messages?.map((message) => (
            <li key={message.id}>{message.message}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
