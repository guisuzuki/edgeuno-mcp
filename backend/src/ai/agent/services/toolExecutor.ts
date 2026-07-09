import { executeTool } from "./executeTool";

export async function toolExecutor(
  tool: string,
  args: Record<string, unknown>,
) {
  return executeTool(tool, args);
}
