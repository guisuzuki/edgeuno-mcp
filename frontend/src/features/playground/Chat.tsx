import { EmptyState } from "./components/EmptyState";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import { ExecutionTimeline } from "./components/ExecutionTimeline";
import { JsonResponse } from "./components/JsonResponse";

import { usePlayground } from "./hooks/usePlayground";

export function Chat() {
  const { messages, loading, send, steps, response } = usePlayground();

  return (
    <div className="grid h-full grid-cols-12 gap-6">
      <section className="col-span-8 flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex-1 space-y-6 overflow-auto">
          {!messages.length && <EmptyState />}

          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>

        <ChatInput loading={loading} onSend={send} />
      </section>

      <aside className="col-span-4 space-y-6">
        <ExecutionTimeline steps={steps} />

        <JsonResponse response={response} />
      </aside>
    </div>
  );
}
