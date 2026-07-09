import { Input } from "@/components/ui/input";

type Parameter = {
  name: string;
  type: string;
  required?: boolean;
};

type Props = {
  parameters: Parameter[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
};

export function ToolForm({ parameters, values, onChange }: Props) {
  if (!parameters.length) {
    return (
      <p className="text-sm text-zinc-500 text-white">
        This tool does not require parameters.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {parameters.map((parameter) => (
        <div key={parameter.name}>
          <label className="mb-2 block text-sm font-medium text-white">
            {parameter.name}
          </label>

          <Input
            type={parameter.type === "number" ? "number" : "text"}
            placeholder={parameter.type}
            value={values[parameter.name] ?? ""}
            onChange={(e) => onChange(parameter.name, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
