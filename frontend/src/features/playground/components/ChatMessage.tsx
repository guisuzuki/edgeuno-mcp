import { Bot, User } from "lucide-react";

import type { ChatMessage as Message } from "../types";

type Props = {
  message: Message;
};

export function ChatMessage({ message }: Props) {
  const assistant = message.role === "assistant";

  return (
    <div className={`flex gap-4 ${assistant ? "" : "justify-end"}`}>
      {assistant && <Bot className="text-cyan-400" />}

      <div
        className={`max-w-2xl rounded-xl p-4 text-white ${
          assistant ? "bg-zinc-900" : "bg-cyan-600"
        }`}
      >
        {message.content}
      </div>

      {!assistant && <User />}
    </div>
  );
}
