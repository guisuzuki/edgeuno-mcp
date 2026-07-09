export interface ApiResponse<T> {
  success: boolean;
  latency: string;
  timestamp: string;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
