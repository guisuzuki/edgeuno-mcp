import type { ToolName } from "../constants/toolRules";
import type { ToolResponse } from "../types";

export function assistantResponse(
  tool: ToolName,
  response: ToolResponse,
): string {
  switch (tool) {
    case "listProducts":
      return `I found ${response.data.length} available products. You can review them in the response panel.`;

    case "createResource":
      return `Your infrastructure is being provisioned successfully. The resource ID is ${response.data.resourceId}.`;

    case "listResources":
      return `I found ${response.data.length} active resources in your account.`;

    case "getOrderStatus":
      return `The order is currently **${response.data.status}**.`;

    case "login":
      return "Authentication completed successfully.";

    default:
      return "Execution completed successfully.";
  }
}
