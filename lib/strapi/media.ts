import type { StrapiMedia } from "./types";

const STRAPI_URL =
  process.env.STRAPI_URL?.replace(/\/$/, "") ?? "http://localhost:1337";

export function getStrapiUrl(): string {
  return STRAPI_URL;
}

export function getStrapiMediaUrl(
  media?: StrapiMedia | null
): string | undefined {
  if (!media?.url) return undefined;
  if (media.url.startsWith("http://") || media.url.startsWith("https://")) {
    return media.url;
  }
  return `${STRAPI_URL}${media.url}`;
}

export const LANDING_ASSETS_PREFIX = "/landing/assets";

export function landingAsset(path: string): string {
  const normalized = path.replace(/^\/+/, "").replace(/^assets\//, "");
  return `${LANDING_ASSETS_PREFIX}/${normalized}`;
}
