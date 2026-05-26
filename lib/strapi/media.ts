import type { StrapiMedia } from "./types";

const STRAPI_URL =
  process.env.STRAPI_URL?.replace(/\/$/, "") ?? "http://localhost:1337";

/** Base URL for uploaded files (Strapi Cloud uses *.media.strapiapp.com). */
export function getStrapiMediaBaseUrl(): string {
  const explicit = process.env.STRAPI_MEDIA_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  if (
    STRAPI_URL.includes(".strapiapp.com") &&
    !STRAPI_URL.includes(".media.strapiapp.com")
  ) {
    return STRAPI_URL.replace(".strapiapp.com", ".media.strapiapp.com");
  }

  return STRAPI_URL;
}

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
  return `${getStrapiMediaBaseUrl()}${media.url}`;
}

export const LANDING_ASSETS_PREFIX = "/landing/assets";

export function landingAsset(path: string): string {
  const normalized = path.replace(/^\/+/, "").replace(/^assets\//, "");
  return `${LANDING_ASSETS_PREFIX}/${normalized}`;
}
