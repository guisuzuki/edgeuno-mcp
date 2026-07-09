import { Badge } from "@/components/ui/badge";
import { ExecuteButton } from "./ExecuteButton";
import { ToolForm } from "./ToolForm";
import { ResponseViewer } from "./ResponseViewer";
import { useExecuteTool } from "../hooks/useExecuteTool";
import { useState } from "react";

function buildPayload(
  parameters: { name: string; type: string }[],
  values: Record<string, string>,
) {
  return parameters.reduce<Record<string, string | number>>(
    (payload, parameter) => {
      const value = values[parameter.name] ?? "";

      payload[parameter.name] =
        parameter.type === "number" ? Number(value) : value;

      return payload;
    },
    {},
  );
}

export function ToolDetails({ tool }: any) {
  const [parameterValues, setParameterValues] = useState<
    Record<string, string>
  >({});
  const { loading, execute, response } = useExecuteTool();

  function handleParameterChange(name: string, value: string) {
    setParameterValues((current) => ({ ...current, [name]: value }));
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">{tool.name}</h2>

        <Badge>{tool.method}</Badge>
      </div>

      <p className="mb-6 text-zinc-400">{tool.description}</p>

      <div>
        <h3 className="mb-2 font-semibold text-white">Endpoint</h3>

        <h3 className="mt-8 mb-3 font-semibold text-white">Parameters</h3>

        <ToolForm
          parameters={tool.parameters}
          values={parameterValues}
          onChange={handleParameterChange}
        />

        <ExecuteButton
          loading={loading}
          onClick={() => {
            execute(tool.name, buildPayload(tool.parameters, parameterValues));
          }}
        />

        <ResponseViewer loading={loading} response={response} />

        <code className="rounded bg-zinc-900 p-2 mt-6">{tool.endpoint}</code>
      </div>
    </div>
  );
}
