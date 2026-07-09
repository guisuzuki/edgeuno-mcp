import { ChatInput } from "@/features/playground/components/ChatInput";
import { ChatMessage } from "@/features/playground/components/ChatMessage";
import { EmptyState } from "@/features/playground/components/EmptyState";
import { ExecutionTimeline } from "@/features/playground/components/ExecutionTimeline";
import { JsonResponse } from "@/features/playground/components/JsonResponse";

import { usePlayground } from "@/features/playground/hooks/usePlayground";

export function PlaygroundPage() {
  const { loading, messages, steps, response, send } = usePlayground();

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6">
      {/* Chat */}

      <section className="flex flex-1 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
        <header className="border-b border-zinc-800 p-6">
          <h1 className="text-2xl font-bold">AI Playground</h1>

          <p className="mt-1 text-sm text-zinc-500">
            Interact with your EdgeUno MCP Server using natural language.
          </p>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {loading && (
                <ChatMessage
                  message={{
                    id: "thinking",
                    role: "assistant",
                    content: "Thinking...",
                  }}
                />
              )}
            </div>
          )}
        </div>

        <footer className="border-t border-zinc-800 p-6">
          <ChatInput loading={loading} onSend={send} />
        </footer>
      </section>

      {/* Right Panel */}

      <aside className="flex w-[400px] flex-col gap-6">
        <ExecutionTimeline steps={steps} />

        <JsonResponse response={response} />
      </aside>
    </div>
  );
}
