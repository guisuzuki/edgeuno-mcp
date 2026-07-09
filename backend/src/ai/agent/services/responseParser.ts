import { ToolDecision } from "../types";

export function parseToolDecision(text: string): ToolDecision {
  const json = text.replace("```json", "").replace("```", "").trim();

  return JSON.parse(json);
}
