import type { NextConfig } from "next";
import { getStrapiMediaBaseUrl } from "./lib/strapi/media";

const strapiUrl = process.env.STRAPI_URL ?? "http://localhost:1337";
const strapiMediaUrl = getStrapiMediaBaseUrl();

function hostnameFromUrl(url: string, fallback: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return fallback;
  }
}

const imageHostnames = Array.from(
  new Set([
    hostnameFromUrl(strapiUrl, "localhost"),
    hostnameFromUrl(strapiMediaUrl, "localhost"),
  ])
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageHostnames.flatMap((hostname) => [
      {
        protocol: "http",
        hostname,
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname,
        pathname: "/**",
      },
    ]),
  },
};

export default nextConfig;
