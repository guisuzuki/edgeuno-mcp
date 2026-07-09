import type { ToolName } from "../constants/toolRules";

export function getFakeResponse(tool: ToolName) {
  switch (tool) {
    case "listProducts":
      return {
        success: true,
        latency: "14ms",
        data: [
          {
            id: 1,
            name: "VPS Basic",
          },
          {
            id: 2,
            name: "VPS Premium",
          },
        ],
      };

    case "createResource":
      return {
        success: true,
        latency: "21ms",
        data: {
          resourceId: 8421,
          status: "creating",
          region: "Miami",
        },
      };

    case "listResources":
      return {
        success: true,
        latency: "17ms",
        data: [
          {
            id: 101,
            hostname: "api-prod",
          },
          {
            id: 102,
            hostname: "database",
          },
        ],
      };

    case "getOrderStatus":
      return {
        success: true,
        latency: "10ms",
        data: {
          orderId: 5521,
          status: "Provisioning",
        },
      };

    default:
      return {
        success: true,
        latency: "9ms",
        data: {},
      };
  }
}
