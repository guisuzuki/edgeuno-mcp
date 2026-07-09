import { useState } from "react";
import { SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  loading: boolean;
  onSend(message: string): void;
};

export function ChatInput({ loading, onSend }: Props) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={message}
        rows={4}
        placeholder="Ask anything about your infrastructure..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button disabled={loading} onClick={handleSend}>
        <SendHorizontal className="mr-2 h-4 w-4" />
        Send
      </Button>
    </div>
  );
}
