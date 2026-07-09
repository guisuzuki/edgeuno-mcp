import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="flex bg-zinc-950 h-16 shrink-0 items-center justify-between border-b border-border px-8">
      <div>
        <span className="block font-heading text-sm font-medium text-muted-foreground">
          EdgeUno MCP Playground
        </span>
        <span className="block text-xs text-muted-foreground text-left">
          OpenAPI → MCP Explorer
        </span>
      </div>

      <Badge variant="outline" className="gap-1.5 text-muted-foreground ">
        <span className="size-1.5 rounded-full bg-emerald-500 items-center" />
        Connected
      </Badge>
    </header>
  );
}
