type StrapiListResponse<T> = {
  data: T[];
  meta?: unknown;
};

type StrapiSingleResponse<T> = {
  data: T | null;
};

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  const token = process.env.STRAPI_API_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

export async function fetchStrapi<T>(
  path: string,
  options?: { revalidate?: number }
): Promise<T> {
  const base = process.env.STRAPI_URL?.replace(/\/$/, "") ?? "http://localhost:1337";
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;

  const response = await fetch(url, {
    headers: getHeaders(),
    next: { revalidate: options?.revalidate ?? 60 },
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed (${response.status}): ${url}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchStrapiCollection<T>(
  endpoint: string,
  query = ""
): Promise<T[]> {
  const qs = query ? (query.startsWith("?") ? query : `?${query}`) : "";
  const json = await fetchStrapi<StrapiListResponse<T>>(`/api/${endpoint}${qs}`);
  return json.data ?? [];
}

export async function fetchStrapiSingle<T>(
  endpoint: string,
  query = ""
): Promise<T | null> {
  const qs = query ? (query.startsWith("?") ? query : `?${query}`) : "";
  const json = await fetchStrapi<StrapiSingleResponse<T>>(`/api/${endpoint}${qs}`);
  return json.data ?? null;
}

export function sortByOrder<T extends { order?: number | null }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
