import { TOOL_RULES, type ToolName } from "../constants/toolRules";

export function resolveTool(prompt: string): ToolName {
  const normalized = prompt.toLowerCase();

  for (const rule of TOOL_RULES) {
    const matched = rule.keywords.some((keyword) =>
      normalized.includes(keyword),
    );

    if (matched) {
      return rule.tool;
    }
  }

  return "listProducts";
}
