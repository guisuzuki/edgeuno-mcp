import { openrouter } from "./providers/openrouter";

import { SYSTEM_PROMPT } from "./prompts/systemPrompt";

import { parseToolDecision } from "./services/responseParser";

import { toolExecutor } from "./services/toolExecutor";

import { assistantResponse } from "./services/assistantResponses";
import { successResponse } from "../../utils/apiResponse";

export class ToolAgent {
  async run(prompt: string) {
    const startedAt = Date.now();

    const completion = await openrouter.chat.completions.create({
      model: "openai/gpt-oss-120b",
      max_tokens: 500,

      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },

        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = completion.choices[0].message.content ?? "";

    const decision = parseToolDecision(content);

    const response = await toolExecutor(decision.tool, decision.arguments);

    return successResponse(
      {
        tool: decision.tool,
        assistant: assistantResponse(decision.tool, response),
        response,
      },
      Date.now() - startedAt,
    );
  }
}
