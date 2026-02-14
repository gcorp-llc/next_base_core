export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function apiClient<T>(
  endpoint: string,
  { body, ...customConfig }: RequestInit = {}
): Promise<T> {
  const headers = { "Content-Type": "application/json", ...customConfig.headers } as Record<string, string>;

  const config: RequestInit = {
    ...customConfig,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json() as Promise<T>;
}

export const api = {
  get: <T>(endpoint: string, config?: RequestInit) =>
    apiClient<T>(endpoint, { ...config, method: "GET" }),
  post: <T>(endpoint: string, body?: any, config?: RequestInit) =>
    apiClient<T>(endpoint, { ...config, method: "POST", body }),
  put: <T>(endpoint: string, body?: any, config?: RequestInit) =>
    apiClient<T>(endpoint, { ...config, method: "PUT", body }),
  patch: <T>(endpoint: string, body?: any, config?: RequestInit) =>
    apiClient<T>(endpoint, { ...config, method: "PATCH", body }),
  delete: <T>(endpoint: string, config?: RequestInit) =>
    apiClient<T>(endpoint, { ...config, method: "DELETE" }),
};
