export function getApiBaseUrl(): string {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    // When accessing via phone on LAN (e.g. 192.168.x.x), connect to backend on same IP
    if (hostname !== "localhost" && hostname !== "127.0.0.1") {
      return `http://${hostname}:8000/api`;
    }
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
}

export function formatMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname !== "localhost" && hostname !== "127.0.0.1") {
      return url.replace("127.0.0.1", hostname).replace("localhost", hostname);
    }
  }
  return url;
}

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options?.headers || {}),
      },
      next: { revalidate: 60 }, // ISR cache 60s
    });

    if (!res.ok) {
      console.warn(`API request failed: ${endpoint} [${res.status}]`);
      return null;
    }

    const json = await res.json();
    return json.data ?? json;
  } catch (error) {
    console.warn(`API connection error for ${endpoint}, falling back to static data:`, error);
    return null;
  }
}

export async function postApi(endpoint: string, data: any, isFormData: boolean = false) {
  try {
    const baseUrl = getApiBaseUrl();
    const headers: Record<string, string> = {
      Accept: "application/json",
    };
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers,
      body: isFormData ? data : JSON.stringify(data),
    });

    const json = await res.json();
    return { ok: res.ok, status: res.status, data: json };
  } catch (error) {
    console.error(`POST ${endpoint} failed:`, error);
    return { ok: false, status: 500, error };
  }
}
