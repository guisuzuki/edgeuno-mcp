import type { ToolDecision } from "../types";

interface CacheEntry {
  decision: ToolDecision;
  expiresAt: number;
}

const TTL_MS = 5 * 60 * 1000;

const cache = new Map<string, CacheEntry>();

function normalize(prompt: string) {
  return prompt.trim().toLowerCase();
}

export function getCachedDecision(prompt: string): ToolDecision | undefined {
  const key = normalize(prompt);
  const entry = cache.get(key);

  if (!entry) return undefined;

  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return undefined;
  }

  return entry.decision;
}

export function setCachedDecision(prompt: string, decision: ToolDecision) {
  cache.set(normalize(prompt), {
    decision,
    expiresAt: Date.now() + TTL_MS,
  });
}
