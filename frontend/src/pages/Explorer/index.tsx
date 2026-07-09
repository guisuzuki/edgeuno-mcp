import { useState } from "react";

import { tools } from "../../features/explorer/mocks/tools";

import { ToolDetails } from "../../features/explorer/components/ToolDetails";
import { ToolList } from "../../features/explorer/components/ToolList";

export function ExplorerPage() {
  const [selected, setSelected] = useState("login");

  const tool = tools.find((t) => t.id === selected)!;

  return (
    <div className="grid grid-cols-12 gap-6">
      <aside className="col-span-3">
        <ToolList selectedTool={selected} onChange={setSelected} />
      </aside>

      <section className="col-span-9">
        <ToolDetails tool={tool} />
      </section>
    </div>
  );
}
