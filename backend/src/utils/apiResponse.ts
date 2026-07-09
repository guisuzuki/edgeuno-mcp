import { ApiResponse } from "../types/apiResponse";

export function successResponse<T>(data: T, latency: number): ApiResponse<T> {
  return {
    success: true,
    latency: `${latency} ms`,
    timestamp: new Date().toISOString(),
    data,
  };
}

export function errorResponse(
  code: string,
  message: string,
): ApiResponse<null> {
  return {
    success: false,
    latency: "0 ms",
    timestamp: new Date().toISOString(),
    error: {
      code,
      message,
    },
  };
}
