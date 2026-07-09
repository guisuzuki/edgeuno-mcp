import { tools } from "../mocks/tools";
import { ToolItem } from "./ToolItem";

type Props = {
  selectedTool: string;
  onChange: (id: string) => void;
};

export function ToolList({ selectedTool, onChange }: Props) {
  return (
    <div className="space-y-3">
      {tools.map((tool) => (
        <ToolItem
          key={tool.id}
          tool={tool}
          selected={selectedTool === tool.id}
          onSelect={() => onChange(tool.id)}
        />
      ))}
    </div>
  );
}
